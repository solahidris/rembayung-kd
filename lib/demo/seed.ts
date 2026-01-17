import { Booking } from "@/types/booking";
import { addDays, format, subDays } from "date-fns";

function formatDate(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function generateSeedBookings(): Booking[] {
  const today = new Date();
  const now = new Date().toISOString();

  return [
    {
      id: "demo-1",
      booking_date: formatDate(addDays(today, 1)),
      time_slot: "dinner",
      guest_count: 4,
      customer_name: "Ahmad bin Ibrahim",
      customer_phone: "+60123456789",
      customer_email: "ahmad@example.com",
      status: "confirmed",
      created_at: now,
      updated_at: now,
    },
    {
      id: "demo-2",
      booking_date: formatDate(addDays(today, 2)),
      time_slot: "lunch",
      guest_count: 2,
      customer_name: "Siti Nurhaliza",
      customer_phone: "+60198765432",
      customer_email: "siti@example.com",
      status: "pending",
      created_at: now,
      updated_at: now,
    },
    {
      id: "demo-3",
      booking_date: formatDate(addDays(today, 3)),
      time_slot: "dinner",
      guest_count: 6,
      customer_name: "Muhammad Ali",
      customer_phone: "+60112233445",
      customer_email: "ali@example.com",
      status: "pending",
      special_requests: "Vegetarian options needed for 2 guests",
      created_at: now,
      updated_at: now,
    },
    {
      id: "demo-4",
      booking_date: formatDate(today),
      time_slot: "lunch",
      guest_count: 3,
      customer_name: "Nurul Izzah",
      customer_phone: "+60133445566",
      customer_email: "nurul@example.com",
      status: "confirmed",
      created_at: now,
      updated_at: now,
    },
    {
      id: "demo-5",
      booking_date: formatDate(subDays(today, 1)),
      time_slot: "dinner",
      guest_count: 8,
      customer_name: "Zainab Othman",
      customer_phone: "+60177889900",
      customer_email: "zainab@example.com",
      status: "cancelled",
      admin_notes: "Customer called to cancel due to emergency",
      created_at: now,
      updated_at: now,
    },
    {
      id: "demo-6",
      booking_date: formatDate(addDays(today, 5)),
      time_slot: "dinner",
      guest_count: 5,
      customer_name: "Hafiz Rahman",
      customer_phone: "+60155667788",
      customer_email: "hafiz@example.com",
      status: "pending",
      special_requests: "Birthday celebration - need cake service",
      created_at: now,
      updated_at: now,
    },
  ];
}
