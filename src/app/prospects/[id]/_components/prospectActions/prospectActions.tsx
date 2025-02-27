"use client";

import { approveProspect, rejectProspect } from "@/actions/prospect";
import { Tooltip } from "@/components/chakra-snippets/tooltip";
import { Prospect } from "@/types/Prospect";
import { IconButton } from "@chakra-ui/react";
import { LuCheck, LuCircleSlash } from "react-icons/lu";

type Props = {
  prospect: Prospect;
};

export default function ProspectActions({ prospect }: Props) {
  return (
    <>
      {["pending", "approved"].includes(prospect.status) && (
        <Tooltip content="Approve prospect">
          <IconButton
            aria-label="Approve prospect"
            onClick={() => approveProspect(prospect.id)}
          >
            <LuCheck />
          </IconButton>
        </Tooltip>
      )}
      {["pending", "declined"].includes(prospect.status) && (
        <Tooltip content="Reject prospect">
          <IconButton
            aria-label="Reject prospect"
            onClick={() => rejectProspect(prospect.id)}
          >
            <LuCircleSlash />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}
