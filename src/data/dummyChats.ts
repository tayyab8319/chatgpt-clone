import type { Chat } from "@/types/chat";

export const dummyChats: Chat[] = [
  {
    id: "chat-1",
    title: "Explain quantum computing",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "Explain quantum computing in simple terms",
      },
      {
        id: "m2",
        role: "assistant",
        content:
          "Sure! Classical computers use bits (0 or 1). Quantum computers use **qubits**, which can be 0, 1, or both at the same time — thanks to a property called superposition.\n\nThis lets them solve certain problems exponentially faster than traditional computers, like breaking encryption or simulating molecules.",
      },
      {
        id: "m3",
        role: "user",
        content: "What is entanglement?",
      },
      {
        id: "m4",
        role: "assistant",
        content:
          "Great question! **Entanglement** is when two qubits become linked — measuring one instantly tells you the state of the other, no matter the distance. Einstein famously called it \"spooky action at a distance\". It's a core resource for quantum communication and computation.",
      },
    ],
  },
  {
    id: "chat-2",
    title: "Python file renaming script",
    messages: [
      {
        id: "m5",
        role: "user",
        content: "Write a Python script to rename all files in a folder",
      },
      {
        id: "m6",
        role: "assistant",
        content: `Here's a simple script:\n\n\`\`\`python\nimport os\n\nfolder = "./my_folder"\nfor i, filename in enumerate(os.listdir(folder)):\n    ext = os.path.splitext(filename)[1]\n    new_name = f"file_{i+1}{ext}"\n    os.rename(\n        os.path.join(folder, filename),\n        os.path.join(folder, new_name)\n    )\nprint("Done!")\n\`\`\`\n\nThis renames every file to \`file_1\`, \`file_2\`, etc., preserving extensions.`,
      },
    ],
  },
  {
    id: "chat-3",
    title: "Dinner ideas for tonight",
    messages: [
      {
        id: "m7",
        role: "user",
        content: "What should I cook for dinner tonight?",
      },
      {
        id: "m8",
        role: "assistant",
        content:
          "Here are a few quick ideas based on what most people have at home:\n\n- 🍳 **Fried rice** — great for using leftover rice\n- 🍝 **Pasta aglio e olio** — just garlic, olive oil, and pasta\n- 🌮 **Tacos** — ground beef + any toppings you have\n- 🥗 **Chickpea salad** — fast, healthy, no cooking needed\n\nWant a full recipe for any of these?",
      },
    ],
  },
];
