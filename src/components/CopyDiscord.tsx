"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { IconDiscord } from "./icons";

export function CopyDiscord({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/30 bg-white/5 rounded-none pixel-corners transition-all group"
    >
      <IconDiscord className="w-5 h-5 group-hover:text-white text-gray-400 transition-colors" />
      <span className="text-gray-300 group-hover:text-white transition-colors">{text}</span>
      <span className="ml-2 text-gray-500">
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
      </span>
    </button>
  );
}
