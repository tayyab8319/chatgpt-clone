import { Sparkles } from "lucide-react";

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}

function BrandLogo() {
  return (
    <div className="mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 shadow-sm">
      <Sparkles size={20} className="text-white" />
    </div>
  );
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="mb-6 text-center">
      <BrandLogo />
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h1>
      {subtitle && (
        <p className="mt-1.5 text-sm text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}
