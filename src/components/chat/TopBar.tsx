import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between h-14 px-5 border-b border-gray-100 bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-900 shadow-sm">
          <Sparkles size={14} className="text-white" />
        </div>
        <span className="font-semibold text-gray-900 text-sm">Pro Assistant</span>
      </div>

      {/* Auth buttons */}
      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="rounded-lg px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer"
        >
          Log in
        </Link>
        <Link
          href="/register"
          className="rounded-lg bg-gray-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-700 transition cursor-pointer"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
