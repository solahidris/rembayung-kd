"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "./StatusBadge";
import { Booking, BookingStatus } from "@/types/booking";
import { format } from "date-fns";
import {
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  Check,
  X,
  RefreshCw,
  Filter,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

type FilterStatus = "all" | BookingStatus;

export function BookingsList() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchBookings = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/bookings");
      const result = await response.json();

      if (result.success) {
        setBookings(result.data);
      } else {
        setError(result.error || "Failed to fetch bookings");
      }
    } catch (err) {
      setError("An error occurred while fetching bookings");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (id: string, status: BookingStatus) => {
    setUpdatingId(id);

    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const result = await response.json();

      if (result.success) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status } : b))
        );
      } else {
        alert(result.error || "Failed to update booking");
      }
    } catch (err) {
      alert("An error occurred");
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredBookings =
    filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  const counts = {
    all: bookings.length,
    pending: bookings.filter((b) => b.status === "pending").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <RefreshCw className="w-8 h-8 text-[var(--color-primary)] animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-[var(--color-accent)] mb-4">{error}</p>
        <Button onClick={fetchBookings}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <Filter className="w-5 h-5 text-[var(--text-muted)]" />
        {(["all", "pending", "confirmed", "cancelled"] as FilterStatus[]).map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                filter === status
                  ? "bg-[var(--color-primary)] text-[var(--bg-primary)]"
                  : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]"
              )}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
              <span className="ml-2 opacity-70">({counts[status]})</span>
            </button>
          )
        )}
        <button
          onClick={fetchBookings}
          className="ml-auto p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          title="Refresh"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      {/* Bookings List */}
      {filteredBookings.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-[var(--text-muted)]">No bookings found</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <Card key={booking.id} variant="elevated" className="overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Left: Booking Info */}
                <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Date & Time */}
                  <div>
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs mb-1">
                      <Calendar className="w-3 h-3" />
                      <span>Date & Time</span>
                    </div>
                    <p className="text-[var(--text-primary)] font-medium">
                      {format(new Date(booking.booking_date), "MMM d, yyyy")}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] capitalize">
                      {booking.time_slot}
                    </p>
                  </div>

                  {/* Guest Info */}
                  <div>
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs mb-1">
                      <Users className="w-3 h-3" />
                      <span>Guest</span>
                    </div>
                    <p className="text-[var(--text-primary)] font-medium">
                      {booking.customer_name}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {booking.guest_count} people
                    </p>
                  </div>

                  {/* Contact */}
                  <div>
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs mb-1">
                      <Phone className="w-3 h-3" />
                      <span>Contact</span>
                    </div>
                    <p className="text-sm text-[var(--text-primary)]">
                      {booking.customer_phone}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] truncate">
                      {booking.customer_email}
                    </p>
                  </div>

                  {/* Status */}
                  <div>
                    <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs mb-1">
                      <Clock className="w-3 h-3" />
                      <span>Status</span>
                    </div>
                    <StatusBadge status={booking.status} />
                    {booking.special_requests && (
                      <div className="flex items-center gap-1 mt-1 text-xs text-[var(--color-primary)]">
                        <MessageSquare className="w-3 h-3" />
                        <span>Has notes</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 lg:border-l lg:border-[var(--border-color)] lg:pl-4">
                  {booking.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => updateStatus(booking.id, "confirmed")}
                        disabled={updatingId === booking.id}
                        className="gap-1"
                      >
                        <Check className="w-4 h-4" />
                        Confirm
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => updateStatus(booking.id, "cancelled")}
                        disabled={updatingId === booking.id}
                        className="gap-1"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </Button>
                    </>
                  )}
                  {booking.status === "confirmed" && (
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => updateStatus(booking.id, "cancelled")}
                      disabled={updatingId === booking.id}
                      className="gap-1"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </Button>
                  )}
                  {booking.status === "cancelled" && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => updateStatus(booking.id, "pending")}
                      disabled={updatingId === booking.id}
                    >
                      Restore
                    </Button>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              {booking.special_requests && (
                <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
                  <p className="text-xs text-[var(--text-muted)] mb-1">
                    Special Requests:
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {booking.special_requests}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
