"use client";

import { Tooltip } from "@/components/chakra-snippets/tooltip";
import { useAsyncCallback } from "@/hooks/useAsyncCallback";
import {
  approveProspect as approveProspectMutation,
  rejectProspect as rejectProspectMutation,
} from "@/services/prospects/actions";
import { Prospect } from "@/types/Prospect";
import { Badge, IconButton, Spinner } from "@chakra-ui/react";
import { LuCheck, LuOctagonAlert, LuX } from "react-icons/lu";

type Props = {
  prospect: Prospect;
};

export default function ProspectActions({ prospect }: Props) {
  const [approveProspectStatus, approveProspect] = useAsyncCallback(
    approveProspectMutation
  );
  const [rejectProspectStatus, rejectProspect] = useAsyncCallback(
    rejectProspectMutation
  );

  if (prospect.blacklisted)
    return (
      <Badge colorPalette="black" size="lg" fontWeight="bold">
        <LuOctagonAlert />
        Blacklisted
      </Badge>
    );

  if (approveProspectStatus.isLoading || rejectProspectStatus.isLoading)
    return <Spinner size="xl" />;

  return (
    <>
      {["pending", "declined"].includes(prospect.status) && (
        <Tooltip content="Approve prospect">
          <IconButton
            aria-label="Approve prospect"
            onClick={() => approveProspect(prospect.id)}
          >
            <LuCheck />
          </IconButton>
        </Tooltip>
      )}
      {["pending", "approved"].includes(prospect.status) && (
        <Tooltip content="Reject prospect">
          <IconButton
            aria-label="Reject prospect"
            onClick={() => rejectProspect(prospect.id)}
          >
            <LuX />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}
