"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="#top"
            className="font-serif text-base italic tracking-tight text-foreground transition-colors hover:text-accent"
          >
            {/* FILL IN: your name */}
            {site.name}
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light / dark theme"
            aria-pressed={isDark}
            title="Toggle light / dark theme"
            className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-black/10 bg-black/5 transition-colors dark:border-white/15 dark:bg-white/10"
          >
            <Sun className="absolute left-1 h-3 w-3 text-foreground/40" />
            <Moon className="absolute right-1 h-3 w-3 text-foreground/40" />
            <motion.span
              animate={{ x: isDark ? 22 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute left-0 z-10 h-4 w-4 rounded-full bg-accent shadow-sm"
            />
          </button>
        </div>
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
