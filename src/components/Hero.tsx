"use client";

import { motion } from "framer-motion";
import { Song_Myung } from "next/font/google";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

const korean = Song_Myung({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pb-16 pt-20 sm:pt-28">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-start sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h1 className="font-serif text-3xl font-bold italic tracking-tight sm:text-4xl">
            {/* FILL IN: your name */}
            {site.name}
            <span
              className={`${korean.className} ml-2 text-2xl not-italic text-foreground/60 sm:text-3xl`}
            >
              {site.koreanName}
            </span>
          </h1>
          <p className="mt-3 text-base font-medium leading-relaxed text-foreground/80">
            {/* FILL IN: your program/role and school */}
            {site.program} @{" "}
            <a
              href={site.school.url}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted decoration-foreground/40 underline-offset-4 hover:text-accent"
            >
              {site.school.name}
            </a>
          </p>

          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/70">
            {/* FILL IN: 3-5 short bio bullets in src/data/site.ts */}
            {site.bioBullets.map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden className="select-none text-foreground/30">
                  •
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-36 w-36 shrink-0 overflow-hidden rounded-full border border-black/10 bg-black/5 sm:h-48 sm:w-48 dark:border-white/15 dark:bg-white/10"
        >
          {site.avatarSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={site.avatarSrc}
              alt={site.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-foreground/40">
              Photo
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
