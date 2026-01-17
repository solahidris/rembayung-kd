export type BookingStatus = "pending" | "confirmed" | "cancelled";

export type TimeSlot = "lunch" | "dinner";

export interface Booking {
  id: string;
  created_at: string;
  updated_at?: string;
  booking_date: string;
  time_slot: TimeSlot;
  guest_count: number;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  special_requests?: string;
  status: BookingStatus;
  admin_notes?: string;
}

export interface BookingFormData {
  booking_date: string;
  time_slot: TimeSlot;
  guest_count: number;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  special_requests?: string;
}

export interface CreateBookingResponse {
  success: boolean;
  data?: Booking;
  message?: string;
  error?: string;
}

export interface BookingsListResponse {
  success: boolean;
  data?: Booking[];
  error?: string;
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface UpdateBookingData {
  status?: BookingStatus;
  admin_notes?: string;
}
