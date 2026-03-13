"use client";

import { useEffect, useRef } from "react";
import type { Message } from "@/types/chat";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
  streamingText: string | null;
}

export default function MessageList({ messages, isTyping, streamingText }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, streamingText]);

  return (
    <div className="flex-1 overflow-y-auto py-4">
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      {/* Thinking dots */}
      {isTyping && <TypingIndicator />}

      {/* Streaming AI reply */}
      {streamingText !== null && (
        <MessageBubble
          message={{ id: "streaming", role: "assistant", content: streamingText }}
          streaming
        />
      )}

      <div ref={bottomRef} />
    </div>
  );
}
