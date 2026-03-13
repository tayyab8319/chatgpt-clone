<div align="center">
  <h1 align="center">Next.js Pro Assistant Template</h1>
  
  <p align="center">
    A premium, production-ready frontend template replicating a modern AI chat interface and authentication flows. Built with Next.js 16, Tailwind CSS v4, and TypeScript.
  </p>
</div>

---

## 🚀 Features

- **💬 Core Chat Interface**: Pixel-perfect replication of the ChatGPT desktop layout.
  - Sidebar for chat history
  - Dynamic input textarea with auto-resize
  - AI streaming response simulation (blinking cursor, character-by-char reveal)
  - "Thinking" bouncing dots animation for AI processing states
- **🔐 Complete Authentication Flow**: 
  - Login page with email and social OAuth buttons (Google, GitHub, Facebook, etc.)
  - Multi-step login flow (`/login` -> `/login/password`)
  - Registration page with live password strength indicators
- **📄 Legal Documentation**: 
  - Premium-designed, standalone `/terms` and `/privacy` pages with clean typography and TL;DR section callouts.
- **🎨 UI/UX Excellence**:
  - Fully responsive design using Tailwind v4.
  - Clean component architecture (Shared UI elements, Auth components, Chat components).
  - Elegant micro-interactions and transitions (hover states, focus rings, cursor pointers).

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: 
  - [`lucide-react`](https://lucide.dev/) for UI icons.
  - [`react-icons`](https://react-icons.github.io/react-icons/) for brand logos.

## 📁 Project Structure

```text
src/
├── app/
│   ├── login/           # Multi-step authentication flow
│   ├── register/        # Sign-up page with password validation
│   ├── terms/           # Terms of Service page
│   ├── privacy/         # Privacy Policy page
│   └── page.tsx         # Main chat interface (Logged in & out states)
├── components/
│   ├── ui/              # Reusable base components (Button, Input)
│   ├── auth/            # Authentication-specific UI components
│   └── chat/            # Chat interface components (MessageList, Sidebar, etc.)
└── types/               # Global TypeScript definitions
```

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   yarn dev
   ```

4. **View the app:** Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔌 Connecting a Backend

This template handles all the frontend UI states and currently uses a mock streaming engine to simulate AI responses. 

To connect a real LLM backend (like OpenAI, Anthropic, or an open-source model):
1. Navigate to `/src/app/page.tsx`
2. Locate the `handleSend` function.
3. Replace the mock streaming delay with your actual API call.

```typescript
const handleSend = async (text: string) => {
  // 1. Optimistically append user message
  
  // 2. Trigger AI backend request
  setIsTyping(true);
  const stream = await fetch('/api/chat', { ... });
  
  // 3. Handle stream response
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
