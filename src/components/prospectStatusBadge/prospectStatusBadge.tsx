"use client";

import { Badge, BadgeProps } from "@chakra-ui/react";
import { ProspectStatus } from "@/types/Prospect";

type Props = {
  status: ProspectStatus;
};

const statuses: {
  [status in ProspectStatus]: { label: string; color: string };
} = {
  approved: {
    label: "Approved",
    color: "green",
  },
  declined: {
    label: "Declined",
    color: "red",
  },
  pending: {
    label: "Pending",
    color: "gray",
  },
};

export function ProspectStatusBadge({
  status,
  ...badgeProps
}: Props & BadgeProps) {
  const statusDetails = statuses[status];

  return (
    <Badge colorPalette={statusDetails.color} {...badgeProps}>
      {statusDetails.label}
    </Badge>
  );
}
