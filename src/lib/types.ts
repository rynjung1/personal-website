export interface Skill {
  name: string;
  slug: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  tag: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface ProjectChip {
  text: string;
  // Hex color (no leading #) used for the chip's border, glow, and text.
  color: string;
}

export interface Project {
  title: string;
  link: string;
  description: string;
  // Path under public/, e.g. "/projects/my-project.png". Leave empty for a placeholder box.
  imgUrl?: string;
  alt: string;
  chips: ProjectChip[];
}

export interface EducationItem {
  degree: string;
  school: string;
  dates: string;
  description: string;
  bullets: string[];
}
