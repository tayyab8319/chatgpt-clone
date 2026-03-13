"use client";

import { useState } from "react";
import type { Chat, Message } from "@/types/chat";

import TopBar from "@/components/chat/TopBar";
import Sidebar from "@/components/chat/Sidebar";
import EmptyState from "@/components/chat/EmptyState";
import MessageList from "@/components/chat/MessageList";
import ChatInput from "@/components/chat/ChatInput";

/* ─── helpers ──────────────────────────────────────────────── */
// You can remove this uid generator if your backend provides IDs
function uid() {
  return Math.random().toString(36).slice(2);
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const [isTyping, setIsTyping] = useState(false);
  const [streamingText, setStreamingText] = useState<string | null>(null);

  const activeChat = chats.find((c) => c.id === activeChatId) ?? null;
  const messages = activeChat?.messages ?? [];

  /* ── send handler ── */
  const handleSend = (text: string) => {
    const userMsg: Message = { id: uid(), role: "user", content: text };
    
    // 1. Optimistically append user message
    let targetId = activeChatId;

    setChats((prev) => {
      if (!targetId) {
        const newChat: Chat = {
          id: uid(),
          title: text.slice(0, 40),
          messages: [userMsg],
        };
        targetId = newChat.id;
        setActiveChatId(newChat.id);
        return [newChat, ...prev];
      }
      return prev.map((c) =>
        c.id === targetId
          ? { ...c, messages: [...c.messages, userMsg] }
          : c
      );
    });

    // 2. Here you would trigger your AI backend request
    // Example:
    // setIsTyping(true);
    // const stream = await fetchAiResponse(text);
    // handleStream(stream, targetId);
  };

  function handleNewChat() {
    setActiveChatId(null);
    setIsTyping(false);
    setStreamingText(null);
  }

  function handleDeleteChat(id: string) {
    setChats((prev) => prev.filter((c) => c.id !== id));
    if (activeChatId === id) setActiveChatId(null);
  }

  /* ── Logged-out layout ── */
  if (!isLoggedIn) {
    return (
      <div className="flex h-screen flex-col bg-white">
        <TopBar />
        <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4">
          <EmptyState onSuggestion={() => {}} />
          <div className="w-full max-w-2xl">
            <ChatInput onSend={() => {}} placeholder="Log in to start chatting…" />
          </div>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="text-xs text-gray-400 hover:text-[#10a37f] underline cursor-pointer transition"
          >
            [Dev] Switch to logged-in view →
          </button>
        </div>
      </div>
    );
  }

  /* ── Logged-in layout ── */
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onNewChat={handleNewChat}
        onSelectChat={setActiveChatId}
        onDeleteChat={handleDeleteChat}
        onSettings={() => alert("Settings coming soon!")}
      />

      {/* Main area */}
      <div className="relative flex flex-1 flex-col overflow-hidden">
        {/* Dev logout */}
        <button
          onClick={() => setIsLoggedIn(false)}
          className="absolute top-3 right-4 z-10 text-xs text-gray-300 hover:text-red-400 underline cursor-pointer transition"
        >
          [Dev] Log out
        </button>

        {messages.length === 0 && !isTyping && streamingText === null ? (
          /* Empty chat */
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-4">
            <EmptyState onSuggestion={handleSend} />
            <div className="w-full max-w-2xl">
              <ChatInput onSend={handleSend} />
            </div>
          </div>
        ) : (
          /* Active chat */
          <>
            <MessageList
              messages={messages}
              isTyping={isTyping}
              streamingText={streamingText}
            />
            <div className="border-t border-gray-100 px-4 py-4">
              <ChatInput onSend={handleSend} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
