"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

interface BlogSocialShareProps {
  title: string;
  slug: string;
}

export default function BlogSocialShare({ title, slug }: BlogSocialShareProps) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, [slug]);

  if (!shareUrl) return null;

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      color: "hover:bg-white hover:text-black hover:border-white",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
        </svg>
      )
    },
    {
      name: "Reddit",
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedText}`,
      color: "hover:bg-[#ff4500] hover:text-white hover:border-[#ff4500]",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.24-1.72l1.37-4.31 3.82.82c.03.84.72 1.51 1.57 1.51.87 0 1.58-.7 1.58-1.58s-.7-1.58-1.58-1.58c-.76 0-1.39.54-1.53 1.25l-4.14-.88c-.14-.03-.29.04-.35.17l-1.64 5.14c-2.43.05-4.66.69-6.33 1.71-.56-.74-1.45-1.22-2.39-1.22-1.65 0-3 1.35-3 3 0 1.12.63 2.1 1.56 2.6-.04.2-.06.4-.06.6 0 3.87 4.93 7 11 7s11-3.13 11-7c0-.2-.02-.4-.06-.6.92-.5 1.56-1.48 1.56-2.6zM5.38 13.25c.76 0 1.38.62 1.38 1.38s-.62 1.38-1.38 1.38-1.38-.62-1.38-1.38.62-1.38 1.38-1.38zm11.38 5.75c-1.87 1.87-5.46 1.87-7.33 0-.15-.15-.15-.4 0-.55.15-.15.4-.15.55 0 1.56 1.56 4.67 1.56 6.23 0 .15-.15.4-.15.55 0 .15.15.15.4 0 .55zm-.13-3c-.76 0-1.38-.62-1.38-1.38s.62-1.38 1.38-1.38 1.38.62 1.38 1.38-.62 1.38-1.38 1.38z"/>
        </svg>
      )
    },
    {
      name: "E-posta",
      href: `mailto:?subject=${encodedText}&body=${encodedUrl}`,
      color: "hover:bg-purple-600 hover:text-white hover:border-purple-600",
      icon: <Mail className="w-4 h-4" />
    }
  ];

  return (
    <div className="glass-strong rounded-2xl p-6 mt-4">
      <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
        Makaleyi Paylaş
      </h4>
      <div className="flex items-center gap-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className={`w-10 h-10 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 flex items-center justify-center transition-all duration-300 ${link.color}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
