"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Career Timeline", href: "#timeline" },
  { label: "Design Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Supporting Docs", href: "#docs" },
];

export function StickyNav() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection logic for active section
      const sections = navItems.map((item) => item.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--neutral-light)] py-4"
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm",
                    isActive ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
