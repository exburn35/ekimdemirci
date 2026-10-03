"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface AISummarizerProps {
  post: BlogPost;
}

interface ModelOption {
  id: string;
  name: string;
  label: string;
  url: string;
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

  const cleanTitle = (post.title || "")
    .replace(/&#8217;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&');
  const canonicalUrl = `https://ekimdemirci.com/blog/${post.slug}`;
  const promptText = `Lütfen bu makaledeki ana fikirleri ve önemli bilgileri özetle ve analiz et: "${cleanTitle}" kaynak: ${canonicalUrl}`;
  const encodedPrompt = encodeURIComponent(promptText);

  const chatgptUrl = `https://chatgpt.com/?q=${encodedPrompt}`;

  const models: ModelOption[] = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      label: "ChatGPT ile",
      url: chatgptUrl,
      icon: (
        <img src="/chatgpt-logo.png" alt="ChatGPT" className="w-5 h-5 rounded-full object-cover" />
      ),
    },
    {
      id: "perplexity",
      name: "Perplexity",
      label: "Perplexity ile",
      url: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
      icon: (
        <img src="/perplexity-logo.avif" alt="Perplexity" className="w-5 h-5 rounded-full object-cover" />
      ),
    },
    {
      id: "claude",
      name: "Claude",
      label: "Claude ile",
      url: `https://claude.ai/new?q=${encodedPrompt}`,
      icon: (
        <img src="/claude-logo.png" alt="Claude" className="w-5 h-5 rounded-full object-cover" />
      ),
    },
    {
      id: "aimode",
      name: "Google AI Mode",
      label: "Google AI Mode ile",
      url: `https://www.google.com/search?udm=50&q=${encodedPrompt}`,
      icon: (
        <img src="/google-ai-mode-logo.webp" alt="Google AI Mode" className="w-5 h-5 rounded-full object-cover" />
      ),
    },
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
          href={chatgptUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex items-center gap-2.5 px-4 flex-grow text-white text-[13px] font-semibold hover:text-white transition-colors duration-300"
        >
          {chatgptIcon}
          <span>AI ile İçeriği Özetle</span>
        </a>

        {/* Separator line */}
        <div className="w-[1px] bg-white/10 self-stretch" />

        {/* Right dropdown arrow toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3.5 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none cursor-pointer"
          aria-label="Diğer AI modelleri ile özetle"
          aria-expanded={isOpen}
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : ""}`} />
        </button>
      </div>

      {/* Dropdown Options - Kept in SSR HTML for crawlers and bot indexing */}
      <div
        className={`absolute left-0 right-0 mt-2 rounded-2xl bg-[#0f0f18] border border-white/10 shadow-2xl overflow-hidden py-1.5 z-50 transition-all duration-200 ${
          isOpen
            ? "opacity-100 visible pointer-events-auto translate-y-0"
            : "opacity-0 invisible pointer-events-none -translate-y-2"
        }`}
      >
        {models.map((model) => (
          <a
            key={model.id}
            href={model.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-gray-400 hover:bg-white/[0.04] hover:text-white transition-all duration-300 border-b border-white/[0.02] last:border-0"
          >
            <span className="flex-shrink-0">{model.icon}</span>
            <span>{model.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
