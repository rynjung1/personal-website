import { Briefcase, Calendar, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-xl font-semibold tracking-tight">Work Experience</h2>

      <div className="mt-8 flex flex-col gap-5">
        {experience.map((role, index) => (
          <FadeIn key={`${role.company}-${role.title}`} delay={index * 0.05}>
            <article className="rounded-xl border border-black/10 bg-white p-6 shadow-md shadow-black/5 border-l-4 border-l-accent dark:border-white/10 dark:border-l-accent dark:bg-white/[0.03] dark:shadow-black/40">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-accent">{role.title}</h3>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                      {role.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <Briefcase className="h-3.5 w-3.5 text-foreground/50" />
                    {role.company}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-foreground/60">
                    <MapPin className="h-3.5 w-3.5" />
                    {role.location}
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-foreground/50">
                  <Calendar className="h-3.5 w-3.5" />
                  {role.dates}
                </span>
              </div>

              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/70 marker:text-accent">
                {role.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>

      {/* FILL IN: edit roles/bullets in src/data/experience.ts */}
    </section>
  );
}
