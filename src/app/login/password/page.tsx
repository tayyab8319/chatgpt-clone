"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function PasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // plug in your auth logic here
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard");
    }, 1500);
  }

  const eyeBtn = (
    <button
      type="button"
      onClick={() => setShow((v) => !v)}
      className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
      aria-label={show ? "Hide password" : "Show password"}
    >
      {show ? <EyeOff size={16} /> : <Eye size={16} />}
    </button>
  );

  return (
    <AuthCard>
      <AuthHeader title="Enter your password" subtitle="Sign in to continue" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          id="password"
          label="Password"
          type={show ? "text" : "password"}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
          rightElement={eyeBtn}
        />

        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-[#10a37f] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" loading={loading}>
          Sign in
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        <Link href="/login" className="font-medium text-[#10a37f] hover:underline">
          ← Use a different email
        </Link>
      </p>
    </AuthCard>
  );
}
