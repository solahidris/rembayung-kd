import { Booking, BookingFormData, BookingStatus } from "@/types/booking";
import { generateSeedBookings } from "./seed";

// In-memory store for demo mode
let demoBookings: Booking[] = [];
let isSeeded = false;

export const demoBookingStore = {
  ensureSeeded: () => {
    if (!isSeeded) {
      demoBookings = generateSeedBookings();
      isSeeded = true;
    }
  },

  getAll: (): Booking[] => {
    demoBookingStore.ensureSeeded();
    return [...demoBookings].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  },

  getById: (id: string): Booking | undefined => {
    demoBookingStore.ensureSeeded();
    return demoBookings.find((b) => b.id === id);
  },

  getByStatus: (status: BookingStatus): Booking[] => {
    demoBookingStore.ensureSeeded();
    return demoBookings.filter((b) => b.status === status);
  },

  getByDate: (date: string): Booking[] => {
    demoBookingStore.ensureSeeded();
    return demoBookings.filter((b) => b.booking_date === date);
  },

  create: (data: BookingFormData): Booking => {
    demoBookingStore.ensureSeeded();
    const now = new Date().toISOString();
    const newBooking: Booking = {
      ...data,
      id: `demo-${Date.now()}`,
      created_at: now,
      updated_at: now,
      status: "pending",
    };
    demoBookings.push(newBooking);
    return newBooking;
  },

  update: (id: string, updates: Partial<Booking>): Booking | null => {
    demoBookingStore.ensureSeeded();
    const index = demoBookings.findIndex((b) => b.id === id);
    if (index !== -1) {
      demoBookings[index] = {
        ...demoBookings[index],
        ...updates,
        updated_at: new Date().toISOString(),
      };
      return demoBookings[index];
    }
    return null;
  },

  delete: (id: string): boolean => {
    demoBookingStore.ensureSeeded();
    const index = demoBookings.findIndex((b) => b.id === id);
    if (index !== -1) {
      demoBookings.splice(index, 1);
      return true;
    }
    return false;
  },

  reset: () => {
    demoBookings = generateSeedBookings();
    isSeeded = true;
  },
};
