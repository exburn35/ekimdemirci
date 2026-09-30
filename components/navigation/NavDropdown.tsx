"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface NavDropdownProps {
  id: string;
  label: string;
  widthClass?: string;
  children: React.ReactNode;
}

export default function NavDropdown({
  id,
  label,
  widthClass = "w-56",
  children,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEscaped, setIsEscaped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsEscaped(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard accessibility: Escape closes dropdown and returns focus to trigger
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      setIsEscaped(true);
      buttonRef.current?.focus();
    }
  };

  // When focus leaves the entire dropdown container, reset states
  const handleBlur = (event: React.FocusEvent) => {
    if (!containerRef.current?.contains(event.relatedTarget as Node)) {
      setIsOpen(false);
      setIsEscaped(false);
    }
  };

  const handleMouseEnter = () => {
    setIsEscaped(false);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsEscaped(false);
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when any child link is clicked
  const handleDropdownClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) {
      setIsOpen(false);
      setIsEscaped(false);
    }
  };

  const isVisible = !isEscaped && isOpen;

  return (
    <div
      ref={containerRef}
      className="relative group [nav-dropdown]"
      data-open={isVisible ? "true" : "false"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        id={`${id}-trigger`}
        aria-expanded={isVisible}
        aria-controls={id}
        aria-haspopup="true"
        onClick={handleClick}
        className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group flex items-center gap-1 whitespace-nowrap focus:outline-none focus-visible:text-white"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isVisible
              ? "rotate-180"
              : "group-hover:rotate-180 group-focus-within:rotate-180"
          }`}
          aria-hidden="true"
        />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-focus-within:w-full" />
      </button>

      {/* Dropdown panel: ALWAYS in DOM, toggled via CSS classes & data attributes */}
      <div
        id={id}
        role="region"
        aria-labelledby={`${id}-trigger`}
        onClick={handleDropdownClick}
        className={`absolute top-full left-0 mt-2 ${widthClass} bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-xl transition-all duration-200 z-50
          before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3
          ${
            isEscaped
              ? "opacity-0 invisible pointer-events-none -translate-y-2"
              : isVisible
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto"
          }
        `}
      >
        <div className="py-2">
          {children}
        </div>
      </div>
    </div>
  );
}
