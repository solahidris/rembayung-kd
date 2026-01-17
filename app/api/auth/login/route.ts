import { NextRequest, NextResponse } from "next/server";
import { isDemoMode, DEMO_ADMIN, DEMO_SESSION_COOKIE } from "@/lib/demo/mode";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Demo mode authentication
    if (isDemoMode() || true) { // Always use demo auth for now
      if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
        // Set session cookie
        const cookieStore = await cookies();
        cookieStore.set(DEMO_SESSION_COOKIE, "authenticated", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 24, // 24 hours
        });

        return NextResponse.json({
          success: true,
          user: {
            email: DEMO_ADMIN.email,
            name: DEMO_ADMIN.name,
          },
        });
      }

      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // TODO: Add real Supabase authentication here
    return NextResponse.json(
      { success: false, error: "Authentication not configured" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: "An error occurred during login" },
      { status: 500 }
    );
  }
}
