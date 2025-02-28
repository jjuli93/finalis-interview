import ProspectsTable from "@/components/prospectTable/prospectTable";
import { getProspects } from "@/services/prospects/actions";
import { Heading, Stack, Tabs } from "@chakra-ui/react";
import { LuCheck, LuOctagonAlert, LuUser } from "react-icons/lu";

//I would advice having one table with filters instead of having three separate sections as requested
export default async function ProspectsPage() {
  // We don't need all this data at once, it would be best to separate this into individual components so that we can load
  // the sections in parallel and don't wait for all the data to be available to show something to the user
  const [
    prospectsResponse,
    approvedProspectsResponse,
    blackListedProspectsResponse,
  ] = await Promise.all([
    getProspects({}),
    getProspects({ status: "approved" }),
    getProspects({
      blacklisted: true,
    }),
  ]);

  return (
    <Stack as="main">
      <Heading size="4xl">Prospects</Heading>
      <Tabs.Root defaultValue="all">
        <Tabs.List>
          <Tabs.Trigger value="all">
            <LuUser />
            All
          </Tabs.Trigger>
          <Tabs.Trigger value="approved">
            <LuCheck />
            Approved
          </Tabs.Trigger>
          <Tabs.Trigger value="blacklisted">
            <LuOctagonAlert />
            Blacklisted
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="all">
          <ProspectsTable
            prospects={prospectsResponse.prospects}
            pagination={prospectsResponse.pagination}
          />
        </Tabs.Content>
        <Tabs.Content value="approved">
          <ProspectsTable
            prospects={approvedProspectsResponse.prospects}
            pagination={approvedProspectsResponse.pagination}
          />
        </Tabs.Content>
        <Tabs.Content value="blacklisted">
          <ProspectsTable
            prospects={blackListedProspectsResponse.prospects}
            pagination={blackListedProspectsResponse.pagination}
          />
        </Tabs.Content>
      </Tabs.Root>
    </Stack>
  );
}
