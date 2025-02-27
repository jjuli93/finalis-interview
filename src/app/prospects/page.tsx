import { ProspectStatusBadge } from "@/components/prospectStatusBadge/prospectStatusBadge";
import { prospects } from "@/mockData/prospects";
import { Heading, IconButton, Stack, Table } from "@chakra-ui/react";
import Link from "next/link";
import { LuSearch } from "react-icons/lu";

async function getProspects() {
  return prospects;
}
//TODO: add pagination
export default async function ProspectsPage() {
  const prospects = await getProspects();

  return (
    <Stack as="main">
      <Heading size="4xl">Prospects</Heading>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Lastname</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
            <Table.ColumnHeader>Actions</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {prospects.map((prospect) => (
            <Table.Row key={prospect.id}>
              <Table.Cell>{prospect.name}</Table.Cell>
              <Table.Cell>{prospect.lastName}</Table.Cell>
              <Table.Cell>
                <ProspectStatusBadge status={prospect.status} />
              </Table.Cell>
              <Table.Cell>
                <IconButton aria-label="View details" asChild>
                  <Link key={prospect.id} href={`/prospects/${prospect.id}`}>
                    <LuSearch />
                  </Link>
                </IconButton>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  );
}
