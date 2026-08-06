import type { Skill } from "@/lib/types";

// Simple Icons slugs: https://simpleicons.org/
// Icons are rendered via the Simple Icons CDN (https://cdn.simpleicons.org/{slug}/{color}).
export const skills: Skill[] = [
  { name: "Python", slug: "python" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Java", slug: "openjdk" },
  { name: "C", slug: "c" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "React", slug: "react" },
  { name: "Apache Kafka", slug: "apachekafka" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Apache Spark", slug: "apachespark" },
  { name: "Flask", slug: "flask" },
  { name: "Docker", slug: "docker" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "SQLite", slug: "sqlite" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Jupyter", slug: "jupyter" },
];
// Not included above: AWS, Azure, Azure SQL, Power BI, dbt, Dagster —
// Simple Icons currently has no working logo for these (Amazon/Microsoft
// brand icons were pulled from the CDN, and dbt/Dagster were never added).
// Add them back manually if/when icons become available.
