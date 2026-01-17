export const isDemoMode = (): boolean => {
  return process.env.NEXT_PUBLIC_DEMO_MODE === "true";
};

export const DEMO_ADMIN = {
  email: "demo@rembayung.com",
  password: "demo123",
  name: "Demo Admin",
} as const;

export const DEMO_SESSION_COOKIE = "demo_session";
