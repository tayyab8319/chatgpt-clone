export default function Divider({ label = "OR" }: { label?: string }) {
  return (
    <div className="my-5 flex items-center gap-3 text-xs font-medium text-gray-400">
      <span className="flex-1 border-t border-gray-200" />
      {label}
      <span className="flex-1 border-t border-gray-200" />
    </div>
  );
}
