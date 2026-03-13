"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import Divider from "@/components/auth/Divider";
import SocialProviders from "@/components/auth/SocialProviders";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: "At least 8 characters", ok: password.length >= 8 },
    { label: "Contains a number", ok: /\d/.test(password) },
    { label: "Contains a special character", ok: /[^a-zA-Z0-9]/.test(password) },
  ];

  if (!password) return null;

  return (
    <ul className="flex flex-col gap-1">
      {checks.map(({ label, ok }) => (
        <li key={label} className={`flex items-center gap-1.5 text-xs ${ok ? "text-[#10a37f]" : "text-gray-400"}`}>
          <CheckCircle2 size={12} className={ok ? "text-[#10a37f]" : "text-gray-300"} />
          {label}
        </li>
      ))}
    </ul>
  );
}

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // plug in your registration logic here
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
      <AuthHeader title="Create an account" subtitle="Get started for free" />

      <SocialProviders />
      <Divider />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          id="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />

        <div className="flex flex-col gap-2">
          <Input
            id="password"
            label="Create a password"
            type={show ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            rightElement={eyeBtn}
          />
          <PasswordStrength password={password} />
        </div>

        <Button type="submit" loading={loading} className="mt-1">
          Create account
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-[#10a37f] hover:underline">
          Sign in
        </Link>
      </p>
      <p className="mt-4 text-center text-xs text-gray-400">
        By creating an account, you agree to our{" "}
        <Link href="/terms" className="underline hover:text-gray-600">Terms</Link> and{" "}
        <Link href="/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>.
      </p>
    </AuthCard>
  );
}
