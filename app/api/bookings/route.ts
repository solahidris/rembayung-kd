import { NextRequest, NextResponse } from "next/server";
import { isDemoMode } from "@/lib/demo/mode";
import { demoBookingStore } from "@/lib/demo/bookings";
import { BookingFormData } from "@/types/booking";

// GET /api/bookings - List all bookings (admin only)
export async function GET(request: NextRequest) {
  try {
    // Demo mode
    if (isDemoMode()) {
      const bookings = demoBookingStore.getAll();
      return NextResponse.json({
        success: true,
        data: bookings,
      });
    }

    // TODO: Add real Supabase implementation here
    // For now, return demo data even if not in demo mode
    const bookings = demoBookingStore.getAll();
    return NextResponse.json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

// POST /api/bookings - Create a new booking
export async function POST(request: NextRequest) {
  try {
    const body: BookingFormData = await request.json();

    // Validate required fields
    const requiredFields = [
      "booking_date",
      "time_slot",
      "guest_count",
      "customer_name",
      "customer_phone",
      "customer_email",
    ];

    for (const field of requiredFields) {
      if (!body[field as keyof BookingFormData]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate guest count
    if (body.guest_count < 2 || body.guest_count > 8) {
      return NextResponse.json(
        { success: false, error: "Guest count must be between 2 and 8" },
        { status: 400 }
      );
    }

    // Validate time slot
    if (!["lunch", "dinner"].includes(body.time_slot)) {
      return NextResponse.json(
        { success: false, error: "Invalid time slot" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.customer_email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if booking date is not a Monday
    const bookingDate = new Date(body.booking_date);
    if (bookingDate.getDay() === 1) {
      return NextResponse.json(
        { success: false, error: "We are closed on Mondays" },
        { status: 400 }
      );
    }

    // Demo mode
    if (isDemoMode()) {
      const booking = demoBookingStore.create(body);
      return NextResponse.json(
        {
          success: true,
          data: booking,
          message: "Booking created successfully",
        },
        { status: 201 }
      );
    }

    // TODO: Add real Supabase implementation here
    // For now, use demo store even if not in demo mode
    const booking = demoBookingStore.create(body);
    return NextResponse.json(
      {
        success: true,
        data: booking,
        message: "Booking created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
