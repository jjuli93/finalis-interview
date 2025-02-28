import { ProspectStatusBadge } from "@/components/prospectStatusBadge/prospectStatusBadge";
import { Prospect } from "@/types/Prospect";
import { HStack, IconButton, Stack, Table } from "@chakra-ui/react";
import Link from "next/link";
import { LuSearch } from "react-icons/lu";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../chakra-snippets/pagination";
import { PageChangeDetails, Pagination } from "@/types/Pagination";

type Props = {
  prospects: Prospect[];
  pagination?: Pagination;
  onPageChange?: (pageChangeDetails: PageChangeDetails) => void;
};

//TODO: add filtering and ordering
export default async function ProspectsTable({
  prospects,
  pagination,
  onPageChange,
}: Props) {
  return (
    <Stack>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Lastname</Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
            <Table.ColumnHeader>Review</Table.ColumnHeader>
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
      {pagination && (
        <PaginationRoot
          count={pagination.totalPages}
          pageSize={pagination.pageSize}
          page={pagination.page}
          defaultPage={1}
          variant="solid"
          alignSelf="flex-end"
          onPageChange={onPageChange}
        >
          <HStack>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      )}
    </Stack>
  );
}
