"use client";

import { useState, useRef, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSend: (text: string) => void;
  placeholder?: string;
}

export default function ChatInput({ onSend, placeholder = "Message ChatGPT" }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function submit() {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
    // reset height
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  function handleInput() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-end gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus-within:border-gray-300 focus-within:shadow-md transition">
        <textarea
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          placeholder={placeholder}
          className="flex-1 resize-none bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none leading-relaxed"
        />
        <button
          onClick={submit}
          disabled={!value.trim()}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white transition hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Send message"
        >
          <ArrowUp size={16} />
        </button>
      </div>
      <p className="mt-2 text-center text-xs text-gray-400">
        ChatGPT can make mistakes. Check important info.
      </p>
    </div>
  );
}
