export const dummyReplies: string[] = [
  "That's a great question! Let me break it down for you. The key idea here is to simplify complex concepts into understandable chunks. Think of it like building blocks — each piece depends on the one before it.",
  "Here's how I'd approach that:\n\n1. **Start small** — don't try to do everything at once.\n2. **Iterate quickly** — ship, learn, and improve.\n3. **Get feedback early** — talk to real users as soon as possible.\n\nDoes that help, or would you like me to go deeper on any step?",
  "Great point! There are actually a few ways to look at this. The most common approach is to use a structured framework, but depending on your context, a lightweight method might serve you better. What's the main constraint you're working with — time, budget, or team size?",
  "Sure, here's a quick summary:\n\n- **Option A** is faster but less flexible\n- **Option B** takes more setup but scales better\n- **Option C** is the safe middle ground\n\nFor most people, I'd recommend starting with Option C and moving to B as things grow.",
  "Absolutely! The short answer is yes — and here's why it works so well in practice. When you align incentives with outcomes, people naturally do the right thing without needing to be told. It's a principle borrowed from economics but applies surprisingly well to product design and team management.",
  "I love that question. The honest answer is: it depends. Context matters a lot here. But if I had to pick one universal rule, it would be: **clarity over cleverness**. Simple and clear beats smart and confusing every time.",
  "Let me give you a concrete example. Imagine you're building an e-commerce site. Instead of building everything yourself, you'd use Stripe for payments, Clerk for auth, and Vercel for deployment. Each tool is best-in-class, and you focus on what only *you* can build. That's the composable approach.",
];

export function getRandomReply(): string {
  return dummyReplies[Math.floor(Math.random() * dummyReplies.length)];
}
