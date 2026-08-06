"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/80 backdrop-blur-sm dark:border-white/10">
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle light / dark theme"
          title="Toggle light / dark theme"
          className="flex shrink-0 items-center gap-1.5 font-serif text-base italic tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {/* FILL IN: your name */}
          {site.name}
          {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
        </button>
        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-foreground/70 sm:gap-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
