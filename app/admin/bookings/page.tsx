import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DEMO_SESSION_COOKIE } from "@/lib/demo/mode";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { BookingsList } from "@/components/admin/BookingsList";

export const metadata = {
  title: "Manage Bookings | Rembayung Admin",
  description: "Manage restaurant reservations and bookings",
};

export default async function AdminBookingsPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(DEMO_SESSION_COOKIE);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <>
      <AdminHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1
            className="text-3xl font-bold text-[var(--text-primary)]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Manage Bookings
          </h1>
          <p className="text-[var(--text-secondary)] mt-2">
            View and manage all restaurant reservations
          </p>
        </div>

        {/* Bookings List */}
        <BookingsList />
      </main>
    </>
  );
}
