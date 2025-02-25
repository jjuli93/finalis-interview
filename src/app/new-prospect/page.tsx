import { Field } from "@/components/chakra-snippets/field";
import { Heading, Input, Stack } from "@chakra-ui/react";

export default function NewProspectPage() {
  return (
    <main>
      <Stack>
        <Heading size="2xl">New prospect</Heading>
        <Heading>Personal information</Heading>

        <Field label="asd" required>
          <Input />
        </Field>
      </Stack>
    </main>
  );
}
