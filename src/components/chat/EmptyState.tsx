const suggestions = [
  "Explain quantum computing in simple terms",
  "Write a Python script to rename files",
  "What should I cook for dinner tonight?",
  "Help me write a professional email",
];

interface EmptyStateProps {
  onSuggestion: (text: string) => void;
}

export default function EmptyState({ onSuggestion }: EmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">How can I help you today?</h2>
        <p className="mt-1 text-sm text-gray-400">Start a conversation or pick a suggestion below</p>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full max-w-lg">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => onSuggestion(s)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-sm text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition cursor-pointer shadow-sm"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
