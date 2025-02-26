import { Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Stack alignItems="center" mt={8}>
      <Heading>Not Found</Heading>
      <Text>Could not find requested resource</Text>
      <Link href="/">Return Home</Link>
    </Stack>
  );
}
