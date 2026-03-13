import { type ButtonHTMLAttributes } from "react";

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}

export default function SocialButton({ icon, label, ...rest }: SocialButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Continue with ${label}`}
      className="flex w-full items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
      {...rest}
    >
      <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
      <span>Continue with {label}</span>
    </button>
  );
}
