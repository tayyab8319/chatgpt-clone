"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import Divider from "@/components/auth/Divider";
import SocialProviders from "@/components/auth/SocialProviders";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    if (email) router.push("/login/password");
  }

  return (
    <AuthCard>
      <AuthHeader title="Welcome back" subtitle="Sign in to continue" />

      <SocialProviders />
      <Divider />

      <form onSubmit={handleContinue} className="flex flex-col gap-4">
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
        <Button type="submit">Continue</Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-[#10a37f] hover:underline">
          Sign up
        </Link>
      </p>
    </AuthCard>
  );
}
