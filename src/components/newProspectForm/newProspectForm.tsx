"use client";

import { Field } from "@/components/chakra-snippets/field";
import {
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "@/components/chakra-snippets/steps";
import {
  Button,
  Group,
  Heading,
  Input,
  Stack,
  StepsChangeDetails,
  Textarea,
} from "@chakra-ui/react";
import {
  LuBanknote,
  LuMapPinHouse,
  LuNotebookText,
  LuUser,
} from "react-icons/lu";
import LocationInput, {
  Location,
} from "@/components/locationInput/locationInput";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NewProspectFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { getCountryCurrencies } from "@/lib/restCountries";
import { Inputs, LAST_STEP_INDEX, STEP_INPUT_NAMES, USD } from "./constants";
import { toaster } from "../chakra-snippets/toaster";
import ImageInput from "../imageInput/imageInput";
import { createProspect as createProspectMutation } from "@/services/prospects";
import { useAsyncCallback } from "@/hooks/useAsyncCallback";
import { useRouter } from "next/navigation";

export default function NewProspectForm() {
  const [{ isLoading }, createProspect] = useAsyncCallback(
    createProspectMutation
  );
  const router = useRouter();
  const [step, setStep] = useState(0);
  const {
    handleSubmit,
    trigger,
    formState: { errors },
    control,
    setValue,
  } = useForm<Inputs>({
    resolver: zodResolver(NewProspectFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      lastName: "",
      bankAccountNumber: "",
      birthDate: "",
      bankName: "",
      email: "",
      phoneNumber: "",
      relevantDetails: "",
      taxId: "",
    },
  });

  const handleStepChange = async ({
    step: selectedStep,
  }: StepsChangeDetails) => {
    if (selectedStep > step) {
      const stepFields = STEP_INPUT_NAMES[step];
      const output = await trigger(stepFields, { shouldFocus: true });

      if (!output) return;
    }

    setStep(selectedStep);
  };

  const handleFormSubmit: SubmitHandler<Inputs> = (values) => {
    createProspect(values).then(() => {
      router.push("/new-prospect/success");
    });
  };

  // It would be best to refactor the component to use native inputs/events to avoid manually setting values and triggering validation
  const handleAddressChange = async (location: Location | null) => {
    if (location) {
      const countryCurrencies = await getCountryCurrencies(location.country);
      if (countryCurrencies.some((currency) => currency.name === USD)) {
        setValue("address", location);
      } else {
        // TODO: fix
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setValue("address", null as any);
        toaster.create({
          type: "error",
          description:
            "Only prospects from countries with USD as currency are accepted",
        });
      }
    } else {
      // TODO: fix
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setValue("address", null as any);
    }

    trigger("address");
  };

  return (
    <StepsRoot
      step={step}
      count={LAST_STEP_INDEX + 1}
      mt={3}
      onStepChange={handleStepChange}
    >
      <StepsList>
        <StepsItem index={0} icon={<LuUser />} />
        <StepsItem index={1} icon={<LuMapPinHouse />} />
        <StepsItem index={2} icon={<LuBanknote />} />
        <StepsItem index={3} icon={<LuNotebookText />} />
      </StepsList>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <Stack>
          <StepsContent index={0}>
            <Heading mb={4}>Personal information</Heading>
            <Stack>
              <Field
                label="Name"
                errorText={errors.name?.message}
                invalid={!!errors.name}
                required
              >
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input autoComplete="given-name" {...field} />
                  )}
                />
              </Field>
              <Field
                label="Last name"
                errorText={errors.lastName?.message}
                invalid={!!errors.lastName}
                required
              >
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input autoComplete="family-name" {...field} />
                  )}
                />
              </Field>
              <Field
                label="Birth date"
                errorText={errors.birthDate?.message}
                invalid={!!errors.birthDate}
                required
              >
                <Controller
                  name="birthDate"
                  control={control}
                  render={({ field }) => (
                    <Input autoComplete="bday" type="date" {...field} />
                  )}
                />
              </Field>
              <Field
                label="Email"
                errorText={errors.email?.message}
                invalid={!!errors.email}
                required
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input autoComplete="email" {...field} />
                  )}
                />
              </Field>
              <Field
                label="Phone number"
                errorText={errors.phoneNumber?.message}
                invalid={!!errors.phoneNumber}
                required
              >
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <Input autoComplete="tel" {...field} />
                  )}
                />
              </Field>
              <Field
                label="Profile photo"
                errorText={errors.profilePhoto?.message}
                invalid={!!errors.profilePhoto}
                required
              >
                <Controller
                  name="profilePhoto"
                  control={control}
                  render={({ field }) => (
                    <ImageInput
                      inputProps={{
                        onChange: (e) => field.onChange(e.target.files?.[0]),
                        onBlur: field.onBlur,
                        name: field.name,
                      }}
                    />
                  )}
                />
              </Field>
            </Stack>
          </StepsContent>
          <StepsContent index={1}>
            <Heading mb={4}>Location information</Heading>
            <Field
              label="Address"
              errorText={errors.address?.message}
              invalid={!!errors.address}
              required
            >
              <LocationInput
                onChange={handleAddressChange}
                invalid={!!errors.address}
              />
            </Field>
          </StepsContent>
          <StepsContent index={2}>
            <Heading mb={4}>Bank information</Heading>
            <Stack>
              <Field
                label="Bank name"
                errorText={errors.bankName?.message}
                invalid={!!errors.bankName}
                required
              >
                <Controller
                  name="bankName"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Field>
              <Field
                label="Bank account number"
                errorText={errors.bankAccountNumber?.message}
                invalid={!!errors.bankAccountNumber}
                required
              >
                <Controller
                  name="bankAccountNumber"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Field>
              <Field
                label="Tax ID"
                errorText={errors.taxId?.message}
                invalid={!!errors.taxId}
                required
              >
                <Controller
                  name="taxId"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Field>
              <Field
                label="Document or passport"
                errorText={errors.document?.message}
                invalid={!!errors.document}
                required
              >
                <Controller
                  name="document"
                  control={control}
                  render={({ field }) => (
                    <ImageInput
                      inputProps={{
                        onChange: (e) => field.onChange(e.target.files?.[0]),
                        onBlur: field.onBlur,
                        name: field.name,
                      }}
                    />
                  )}
                />
              </Field>
            </Stack>
          </StepsContent>
          <StepsContent index={3}>
            <Heading mb={4}>Other information</Heading>
            <Stack>
              <Field
                label="Relevant details"
                errorText={errors.relevantDetails?.message}
                invalid={!!errors.relevantDetails}
              >
                <Controller
                  name="relevantDetails"
                  control={control}
                  render={({ field }) => <Textarea {...field} minH="300px" />}
                />
              </Field>
            </Stack>
          </StepsContent>
          {step < LAST_STEP_INDEX ? (
            <Group alignSelf="flex-end">
              <StepsPrevTrigger asChild>
                <Button type="button" variant="outline" size="sm">
                  Previous
                </Button>
              </StepsPrevTrigger>
              <StepsNextTrigger asChild>
                <Button type="button" variant="outline" size="sm">
                  Next
                </Button>
              </StepsNextTrigger>
            </Group>
          ) : (
            <Button type="submit" loading={isLoading}>
              Submit information
            </Button>
          )}
        </Stack>
      </form>
    </StepsRoot>
  );
}
