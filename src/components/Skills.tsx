"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import type { Skill } from "@/lib/types";

const rowSize = Math.ceil(skills.length / 3);
const rows: Skill[][] = [
  skills.slice(0, rowSize),
  skills.slice(rowSize, rowSize * 2),
  skills.slice(rowSize * 2),
];

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, y: -5 }}
      className="flex min-w-[96px] flex-col items-center gap-3"
    >
      {/* Icon via Simple Icons CDN, rendered in each icon's own brand color: https://cdn.simpleicons.org/{slug} */}
      <img
        src={`https://cdn.simpleicons.org/${skill.slug}`}
        alt={skill.name}
        className="h-12 w-12"
        loading="lazy"
      />
      <span className="text-center text-sm font-medium text-foreground/70">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-black/[0.03] py-20 dark:bg-white/[0.04]">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-xl font-semibold tracking-tight"
        >
          Technical Skills
        </motion.h2>

        <div className="space-y-6">
          {rows.map((rowSkills, rowIndex) => {
            const marqueeSkills = [...rowSkills, ...rowSkills];
            return (
              <div key={rowIndex} className="relative overflow-x-hidden overflow-y-visible py-4">
                <div className="flex w-max animate-marquee-right gap-8">
                  {marqueeSkills.map((skill, index) => (
                    <SkillItem key={`row${rowIndex}-${skill.slug}-${index}`} skill={skill} />
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/[0.03] to-transparent dark:from-white/[0.04]" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/[0.03] to-transparent dark:from-white/[0.04]" />
              </div>
            );
          })}
        </div>

        {/* FILL IN: add/remove skills in src/data/skills.ts — { name, slug } pairs matching https://simpleicons.org/ */}
      </div>
    </section>
  );
}
