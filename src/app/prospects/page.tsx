import { getProspects } from "@/actions/prospect";
import ProspectsTable from "@/components/prospectTable/prospectTable";
import { Flex, Heading, Separator, Stack } from "@chakra-ui/react";

//I would advice having one table with filters instead of having two separate tables (as requested)
export default async function ProspectsPage() {
  const prospects = await getProspects();

  return (
    <Flex as="main" w="100%" alignItems="stretch" gap={8}>
      <Stack flex={1}>
        <Heading size="4xl">Prospects</Heading>
        <ProspectsTable
          prospects={prospects}
          pagination={{ page: 1, pageSize: 10, totalPages: 1 }}
        />
      </Stack>
      <Separator orientation="vertical" />
      <Stack flex={1}>
        <Heading size="4xl">Approved prospects</Heading>
        <ProspectsTable prospects={prospects} />
      </Stack>
    </Flex>
  );
}
