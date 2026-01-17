import { NextRequest, NextResponse } from "next/server";
import { isDemoMode } from "@/lib/demo/mode";
import { demoBookingStore } from "@/lib/demo/bookings";
import { UpdateBookingData } from "@/types/booking";

// GET /api/bookings/[id] - Get a single booking
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (isDemoMode()) {
      const booking = demoBookingStore.getById(id);
      if (!booking) {
        return NextResponse.json(
          { success: false, error: "Booking not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: booking });
    }

    // TODO: Add real Supabase implementation
    const booking = demoBookingStore.getById(id);
    if (!booking) {
      return NextResponse.json(
        { success: false, error: "Booking not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: booking });
  } catch (error) {
    console.error("Error fetching booking:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch booking" },
      { status: 500 }
    );
  }
}

// PATCH /api/bookings/[id] - Update a booking (status, admin_notes)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body: UpdateBookingData = await request.json();

    // Validate status if provided
    if (body.status && !["pending", "confirmed", "cancelled"].includes(body.status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status value" },
        { status: 400 }
      );
    }

    if (isDemoMode()) {
      const booking = demoBookingStore.update(id, body);
      if (!booking) {
        return NextResponse.json(
          { success: false, error: "Booking not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        data: booking,
        message: "Booking updated successfully",
      });
    }

    // TODO: Add real Supabase implementation
    const booking = demoBookingStore.update(id, body);
    if (!booking) {
      return NextResponse.json(
        { success: false, error: "Booking not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      data: booking,
      message: "Booking updated successfully",
    });
  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update booking" },
      { status: 500 }
    );
  }
}

// DELETE /api/bookings/[id] - Delete a booking
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (isDemoMode()) {
      const success = demoBookingStore.delete(id);
      if (!success) {
        return NextResponse.json(
          { success: false, error: "Booking not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        message: "Booking deleted successfully",
      });
    }

    // TODO: Add real Supabase implementation
    const success = demoBookingStore.delete(id);
    if (!success) {
      return NextResponse.json(
        { success: false, error: "Booking not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete booking" },
      { status: 500 }
    );
  }
}
