import { Calendar, GraduationCap } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-xl font-semibold tracking-tight">Education</h2>

      <div className="mt-8 flex flex-col gap-4">
        {education.map((item, index) => (
          <FadeIn key={`${item.school}-${item.degree}`} delay={index * 0.05}>
            <article className="rounded-xl border border-black/10 bg-white p-6 shadow-md shadow-black/5 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/40">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-accent">{item.degree}</h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                    <GraduationCap className="h-3.5 w-3.5 text-foreground/50" />
                    {item.school}
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-foreground/50">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.dates}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{item.description}</p>

              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/70 marker:text-accent">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>

      {/* FILL IN: edit degrees/bullets in src/data/education.ts */}
    </section>
  );
}
