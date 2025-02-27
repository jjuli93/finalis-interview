import { Heading, Stack } from "@chakra-ui/react";
import NewProspectForm from "@/components/newProspectForm/newProspectForm";

//TODO: Is this page public?

export default function NewProspectPage() {
  return (
    <Stack as="main">
      <Heading size="4xl">New prospect</Heading>
      <NewProspectForm />
    </Stack>
  );
}
