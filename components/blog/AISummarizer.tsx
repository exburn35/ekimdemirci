"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface AISummarizerProps {
  post: BlogPost;
}

interface ModelOption {
  id: string;
  name: string;
  label: string;
  icon: React.ReactNode;
}

export default function AISummarizer({ post }: AISummarizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getUrl = (modelId: string) => {
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    const promptText = `Summarize and analyze the key insights about "${post.title}" from ${pageUrl}`;
    const encodedPrompt = encodeURIComponent(promptText);

    switch (modelId) {
      case "chatgpt":
        return `https://chatgpt.com/?q=${encodedPrompt}`;
      case "perplexity":
        return `https://www.perplexity.ai/search?q=${encodedPrompt}`;
      case "claude":
        return `https://claude.ai/new?q=${encodedPrompt}`;
      case "gemini":
        return `https://gemini.google.com/app?q=${encodedPrompt}`;
      case "grok":
        return `https://x.com/i/grok?q=${encodedPrompt}`;
      case "aimode":
        return `https://www.google.com/search?q=${encodedPrompt}`;
      default:
        return "#";
    }
  };

  const models: ModelOption[] = [
    {
      id: "perplexity",
      name: "Perplexity",
      label: "with Perplexity",
      icon: (
        <img src="/perplexity-logo.avif" alt="Perplexity" className="w-5 h-5 rounded-full object-cover" />
      )
    },
    {
      id: "aimode",
      name: "AI Mode",
      label: "with AI Mode",
      icon: (
        <img src="/google-ai-mode-logo.webp" alt="AI Mode" className="w-5 h-5 rounded-full object-cover" />
      )
    },
    {
      id: "claude",
      name: "Claude",
      label: "with Claude",
      icon: (
        <img src="/claude-logo.png" alt="Claude" className="w-5 h-5 rounded-full object-cover" />
      )
    },
    {
      id: "grok",
      name: "Grok",
      label: "with Grok",
      icon: (
        <img src="/grok-logo.png" alt="Grok" className="w-5 h-5 rounded-full object-cover" />
      )
    },
    {
      id: "gemini",
      name: "Gemini",
      label: "with Gemini",
      icon: (
        <img src="/gemini-logo.jpg" alt="Gemini" className="w-5 h-5 rounded-full object-cover" />
      )
    }
  ];

  const chatgptIcon = (
    <img src="/chatgpt-logo.png" alt="ChatGPT" className="w-5 h-5 rounded-full object-cover" />
  );

  return (
    <div className="relative w-full z-40 mb-4" ref={dropdownRef}>
      {/* Split Button Container */}
      <div className="flex items-stretch rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 overflow-hidden h-[44px]">
        {/* Left main action (Link to ChatGPT) */}
        <a
          href={getUrl("chatgpt")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 flex-grow text-white text-[13px] font-semibold hover:text-white transition-colors duration-300"
        >
          {chatgptIcon}
          <span>Summarize this article with ChatGPT</span>
        </a>

        {/* Separator line */}
        <div className="w-[1px] bg-white/10 self-stretch" />

        {/* Right dropdown arrow toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3.5 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none"
          aria-label="Diğer AI modelleri ile özetle"
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : ""}`} />
        </button>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 rounded-2xl bg-[#0f0f18] border border-white/10 shadow-2xl overflow-hidden py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {models.map((model) => (
            <a
              key={model.id}
              href={getUrl(model.id)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-gray-400 hover:bg-white/[0.04] hover:text-white transition-all duration-300 border-b border-white/[0.02] last:border-0"
            >
              <span className="flex-shrink-0">{model.icon}</span>
              <span>with {model.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
