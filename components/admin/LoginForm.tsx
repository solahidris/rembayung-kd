"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { DEMO_ADMIN } from "@/lib/demo/mode";
import { Lock } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/admin/bookings");
        router.refresh();
      } else {
        setError(result.error || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--bg-primary)]">
      <Card variant="elevated" className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <h1
            className="text-2xl font-bold text-[var(--text-primary)]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Admin Login
          </h1>
          <p className="text-sm text-[var(--text-muted)] mt-2">
            Access the Rembayung admin console
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="admin@rembayung.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <div className="p-3 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30">
              <p className="text-sm text-[var(--color-accent)]">{error}</p>
            </div>
          )}

          <Button type="submit" className="w-full" isLoading={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
          <p className="text-xs text-[var(--text-muted)] text-center mb-3">
            Demo Credentials
          </p>
          <div className="bg-[var(--bg-card)] rounded-lg p-3 text-sm font-mono">
            <p className="text-[var(--text-secondary)]">
              Email: <span className="text-[var(--color-primary)]">{DEMO_ADMIN.email}</span>
            </p>
            <p className="text-[var(--text-secondary)]">
              Password: <span className="text-[var(--color-primary)]">{DEMO_ADMIN.password}</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
