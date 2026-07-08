export type LetterState =
  | "closed"
  | "focus"
  | "opening"
  | "revealing"
  | "opened";

export interface StudentWelcomeData {
  name?: string;
  program?: string;
  level?: string;
  startDate?: string;
  language?: "pt" | "en" | "es";
}

export interface NavigationStep {
  id: string;
  number: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
}
