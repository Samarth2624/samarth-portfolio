export interface ProjectMetric {
  label: string;
  value: string;
}

export type ProjectType =
  | "embedded"
  | "automation"
  | "ai";

export interface Project {

  title: string;

  category: string;

  description: string;

  tech: string[];

  metrics: ProjectMetric[];

  github: string;

  live?: string;

  status:
    | "ONLINE"
    | "ACTIVE"
    | "READY"
    | "COMPLETE";

  type: ProjectType;

}

export const ProjectColors = {

  embedded:{
    primary:"#00d9ff",
    glow:"rgba(0,217,255,.35)",
    badge:"text-cyan-300",
    border:"border-cyan-400/30"
  },

  automation:{
    primary:"#fb923c",
    glow:"rgba(251,146,60,.35)",
    badge:"text-orange-300",
    border:"border-orange-400/30"
  },

  ai:{
    primary:"#a855f7",
    glow:"rgba(168,85,247,.35)",
    badge:"text-purple-300",
    border:"border-purple-400/30"
  }

};