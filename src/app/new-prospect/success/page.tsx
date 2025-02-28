import { Heading, Stack, Text } from "@chakra-ui/react";
import { LuBadgeCheck } from "react-icons/lu";

export default function NewProspectSuccessPage() {
  return (
    <Stack alignItems="center" as="main">
      <LuBadgeCheck color="green" size="100px" />
      <Heading size="3xl">Your registration is complete!</Heading>
      <Text>We will be in touch soon..</Text>
    </Stack>
  );
}
