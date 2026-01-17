import { LoginForm } from "@/components/admin/LoginForm";

export const metadata = {
  title: "Admin Login | Rembayung",
  description: "Login to access the Rembayung admin console",
};

export default function AdminLoginPage() {
  return <LoginForm />;
}
