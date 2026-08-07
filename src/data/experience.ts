import type { ExperienceItem } from "@/lib/types";

// Ordered most recent first.
export const experience: ExperienceItem[] = [
  {
    title: "Cloud Financial Engineer Intern", // adjust title wording if needed
    company: "Statistics Canada",
    tag: "Internship",
    location: "Toronto, Ontario, Canada",
    dates: "May 2026 - Present",
    bullets: [
      "Designed a usage-based chargeback model, attributing platform costs via CPU/RAM/storage to individual users",
      "Automated a cloud cost pipeline connecting Azure SQL to Excel using Python, cutting manual refresh time by 81%",
      "Built a Power BI dashboard ingesting Azure Advisor recommendations via REST API, ranking cost-saving opportunities by resource",
    ],
  },
  {
    title: "Data Engineer Intern",
    company: "20/20 Missions",
    tag: "Contract",
    location: "Coquitlam, British Columbia, Canada",
    dates: "Mar 2026 - May 2026",
    bullets: [
      "Developed a weighted matching algorithm in Python/SQL, filtering and ranking inventory across 9 prescription fields",
      "Architected an offline-first SQLite-backed clinic system serving browser clients over LAN with zero installs",
      "Engineered dispense logic with availability checks, preventing duplicate assignment across up to 10 concurrent users",
    ],
  },
  {
    title: "Data Engineer Intern",
    company: "VLS Group Inc",
    tag: "Internship",
    location: "Vaughan, Ontario, Canada",
    dates: "Mar 2023 - Aug 2023",
    bullets: [
      "Delivered a full-stack inventory system in JavaScript, cutting manual update latency by 80%",
      "Implemented backend validation with JavaScript event triggers, enforcing atomic data integrity checks",
    ],
  },
];
