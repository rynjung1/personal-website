"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  link: string;
  imgUrl?: string;
  alt: string;
  description: string;
  children?: ReactNode;
  index?: number;
}

export default function ProjectCard({
  title,
  link,
  imgUrl,
  alt,
  description,
  children,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="w-full overflow-hidden rounded-lg border border-black/10 bg-white dark:border-white/15 dark:bg-white/[0.04]"
    >
      <div className="relative h-52 w-full border-b border-black/10 bg-black/5 dark:border-white/15 dark:bg-white/10">
        {imgUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imgUrl} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-foreground/40">
            Image
          </div>
        )}
      </div>
      <div className="px-4 py-3">
        <div className="mb-1 flex flex-row items-center gap-2">
          <p className="text-lg font-semibold">{title}</p>
          <a href={link} target="_blank" rel="noreferrer" aria-label={title}>
            <GithubMark className="h-[18px] w-[18px] text-foreground/60 transition-colors hover:text-accent" />
          </a>
        </div>
        <p className="text-xs leading-relaxed text-foreground/60">{description}</p>
        <div className="mt-3 flex flex-row flex-wrap gap-2">{children}</div>
      </div>
    </motion.div>
  );
}

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 5.02 3.26 9.27 7.77 10.77.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 2.86-.38c.97 0 1.95.13 2.86.38 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}
