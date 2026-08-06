"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ProjectChip from "@/components/ProjectChip";
import { projects } from "@/data/projects";

const INITIAL_COUNT = 3;

export default function Projects() {
  const [seeMore, setSeeMore] = useState(false);

  const handleToggle = () => {
    if (seeMore) {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setSeeMore((prev) => !prev);
  };

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-xl font-semibold tracking-tight">Projects</h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, seeMore ? projects.length : INITIAL_COUNT).map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            link={project.link}
            imgUrl={project.imgUrl}
            alt={project.alt}
            description={project.description}
            index={index}
          >
            {project.chips.map((chip) => (
              <ProjectChip key={chip.text} text={chip.text} color={chip.color} />
            ))}
          </ProjectCard>
        ))}
      </div>

      {projects.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={handleToggle}
          className="mx-auto mt-10 flex flex-col items-center text-sm font-medium text-foreground/60 transition-colors hover:text-accent"
        >
          {seeMore ? (
            <>
              <ChevronUp className="h-5 w-5" />
              See less
            </>
          ) : (
            <>
              See more
              <ChevronDown className="h-5 w-5" />
            </>
          )}
        </button>
      )}
    </section>
  );
}
