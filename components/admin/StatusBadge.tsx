"use client";

import { Badge } from "@/components/ui/Badge";
import { BookingStatus } from "@/types/booking";

interface StatusBadgeProps {
  status: BookingStatus;
}

const statusConfig = {
  pending: {
    variant: "warning" as const,
    label: "Pending",
  },
  confirmed: {
    variant: "success" as const,
    label: "Confirmed",
  },
  cancelled: {
    variant: "danger" as const,
    label: "Cancelled",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return <Badge variant={config.variant}>{config.label}</Badge>;
}
