import { MessageSquare, Trash2 } from "lucide-react";
import type { Chat } from "@/types/chat";

interface ChatItemProps {
  chat: Chat;
  isActive: boolean;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ChatItem({ chat, isActive, onSelect, onDelete }: ChatItemProps) {
  return (
    <li
      onClick={() => onSelect(chat.id)}
      className={`group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm cursor-pointer transition ${
        isActive
          ? "bg-gray-200 text-gray-900"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <MessageSquare size={14} className="shrink-0 text-gray-400" />
      <span className="flex-1 truncate">{chat.title}</span>
      <button
        onClick={(e) => { e.stopPropagation(); onDelete(chat.id); }}
        className="hidden group-hover:flex items-center text-gray-400 hover:text-red-500 transition cursor-pointer"
        aria-label="Delete chat"
      >
        <Trash2 size={13} />
      </button>
    </li>
  );
}
