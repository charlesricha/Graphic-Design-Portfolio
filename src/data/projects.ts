import rawProjects from "./projects.json";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = rawProjects as Project[];

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
