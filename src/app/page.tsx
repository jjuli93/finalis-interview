import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  // TODO: check if user is logged in and redirect

  return (
    <Stack as="main" alignItems="center" gap={4}>
      <Heading size="4xl">Finalis interview project</Heading>
      <Heading>Julián Álvarez</Heading>
      <Text>
        This page contains a list of available links to show the different pages
        of the project
      </Text>
      <Flex gap={4}>
        <Button aria-label="View details" asChild>
          <Link href="/new-prospect">New prospect form</Link>
        </Button>
        <Button aria-label="View details" asChild>
          <Link href="/prospects">Prospects list</Link>
        </Button>
      </Flex>
    </Stack>
  );
}
