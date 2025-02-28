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

export default function BankInformationStep({ errors, control }: Props) {
  return (
    <>
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
    </>
  );
}
