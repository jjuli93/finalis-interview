"use client";

import { Tooltip } from "@/components/chakra-snippets/tooltip";
import { approveProspect, rejectProspect } from "@/services/prospects/actions";
import { Prospect } from "@/types/Prospect";
import { Badge, IconButton } from "@chakra-ui/react";
import { LuCheck, LuOctagonAlert, LuX } from "react-icons/lu";

type Props = {
  prospect: Prospect;
};

export default function ProspectActions({ prospect }: Props) {
  if (prospect.blacklisted)
    return (
      <Badge colorPalette="black" size="lg" fontWeight="bold">
        <LuOctagonAlert />
        Blacklisted
      </Badge>
    );

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
