"use client";

import { Plus, Settings } from "lucide-react";
import type { Chat } from "@/types/chat";
import ChatItem from "./ChatItem";

interface SidebarProps {
  chats: Chat[];
  activeChatId: string | null;
  onNewChat: () => void;
  onSelectChat: (id: string) => void;
  onDeleteChat: (id: string) => void;
  onSettings: () => void;
}

export default function Sidebar({
  chats,
  activeChatId,
  onNewChat,
  onSelectChat,
  onDeleteChat,
  onSettings,
}: SidebarProps) {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-gray-50 border-r border-gray-100">
      {/* New chat button */}
      <div className="p-3">
        <button
          onClick={onNewChat}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition cursor-pointer"
        >
          <Plus size={16} />
          New chat
        </button>
      </div>

      {/* Chat list */}
      <nav className="flex-1 overflow-y-auto px-2 py-1">
        {chats.length === 0 ? (
          <p className="px-3 py-4 text-xs text-gray-400 text-center">No conversations yet</p>
        ) : (
          <ul className="flex flex-col gap-0.5">
            {chats.map((chat) => (
              <ChatItem
                key={chat.id}
                chat={chat}
                isActive={chat.id === activeChatId}
                onSelect={onSelectChat}
                onDelete={onDeleteChat}
              />
            ))}
          </ul>
        )}
      </nav>

      {/* Settings */}
      <div className="border-t border-gray-200 p-3">
        <button
          onClick={onSettings}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition cursor-pointer"
        >
          <Settings size={16} />
          Settings
        </button>
      </div>
    </aside>
  );
}
