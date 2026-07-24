"use client";

import { useEffect, useState } from "react";
import { Link2 } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length === 0) return null;

  return (
    <div className="glass-strong rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Link2 className="w-5 h-5 text-blue-400" />
        İçindekiler
      </h3>
      <nav className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-gray-400 hover:text-white transition-colors text-sm ${
              heading.level === 3 ? "pl-4 border-l border-gray-800" : "font-medium"
            }`}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(heading.id);
              if (element) {
                const navHeight = 100;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementPosition - navHeight,
                  behavior: "smooth"
                });
              }
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
