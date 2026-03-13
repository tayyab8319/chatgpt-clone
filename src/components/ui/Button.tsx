import { type ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "ghost";
}

export default function Button({
  children,
  loading = false,
  variant = "primary",
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  const base =
    "w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#10a37f] text-white hover:bg-[#0e9170] focus-visible:ring-[#10a37f]",
    ghost:
      "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-300",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {loading && <Loader2 size={16} className="animate-spin" />}
      {children}
    </button>
  );
}
