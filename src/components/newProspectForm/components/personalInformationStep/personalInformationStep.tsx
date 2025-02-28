"use client";

import { Field } from "@/components/chakra-snippets/field";
import ImageInput from "@/components/imageInput/imageInput";
import { Heading, Input, Stack } from "@chakra-ui/react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Inputs } from "../../constants";

type Props = {
  control: Control<Inputs>;
  errors: FieldErrors<Inputs>;
};

export default function PersonalInformationStep({ errors, control }: Props) {
  return (
    <>
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
            render={({ field }) => <Input autoComplete="email" {...field} />}
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
            render={({ field }) => <Input autoComplete="tel" {...field} />}
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
    </>
  );
}
