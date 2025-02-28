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
import { createProspect as createProspectMutation } from "@/services/prospects";
import { useAsyncCallback } from "@/hooks/useAsyncCallback";
import { useRouter } from "next/navigation";
import PersonalInformationStep from "./components/personalInformationStep/personalInformationStep";
import BankInformationStep from "./components/bankInformationStep/bankInformationStep";

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
            <PersonalInformationStep errors={errors} control={control} />
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
            <BankInformationStep errors={errors} control={control} />
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
