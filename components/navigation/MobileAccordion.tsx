"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface MobileAccordionProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export default function MobileAccordion({
  id,
  label,
  children,
}: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden border border-white/5 bg-white/[0.01]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-all p-4 font-medium"
      >
        {label}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-purple-400" : "text-gray-500"
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Accordion panel: ALWAYS in DOM, toggled via CSS max-height and opacity */}
      <div
        id={id}
        role="region"
        data-open={isOpen ? "true" : "false"}
        className={`overflow-hidden bg-black/20 transition-all duration-300 ${
          isOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="p-2 flex flex-col gap-1 border-t border-white/5">
          {children}
        </div>
      </div>
    </div>
  );
}
