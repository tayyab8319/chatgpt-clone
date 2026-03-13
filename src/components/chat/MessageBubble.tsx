import { Bot, User } from "lucide-react";
import type { Message } from "@/types/chat";

interface MessageBubbleProps {
  message: Message;
  streaming?: boolean;
}

export default function MessageBubble({ message, streaming = false }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 px-4 py-3 ${isUser ? "flex-row-reverse" : ""}`}>
      {/* Avatar */}
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white text-xs font-medium ${
          isUser ? "bg-gray-800" : "bg-[#10a37f]"
        }`}
      >
        {isUser ? <User size={15} /> : <Bot size={15} />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-gray-900 text-white rounded-tr-sm"
            : "bg-gray-100 text-gray-800 rounded-tl-sm"
        }`}
      >
        {message.content}
        {streaming && (
          <span className="inline-block w-0.5 h-3.5 ml-0.5 bg-gray-500 align-middle animate-pulse" />
        )}
      </div>
    </div>
  );
}
