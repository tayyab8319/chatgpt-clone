interface AuthCardProps {
  children: React.ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-[400px] rounded-2xl bg-white border border-gray-100 shadow-sm px-8 py-10">
        {children}
      </div>
    </main>
  );
}
