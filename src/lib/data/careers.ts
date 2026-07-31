import type { CareerPosition } from "@/types";

export const careersData: CareerPosition[] = [
  {
    id: "1",
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "full-time",
    description:
      "Build premium web experiences with Next.js, TypeScript, and Framer Motion.",
    requirements: [
      "5+ years React/Next.js experience",
      "Strong TypeScript skills",
      "Eye for design and animation",
    ],
    publishedAt: "2025-12-01",
  },
  {
    id: "2",
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "full-time",
    description:
      "Design conversion-focused interfaces for web and mobile products.",
    requirements: [
      "3+ years product design experience",
      "Figma proficiency",
      "Portfolio of shipped work",
    ],
    publishedAt: "2025-11-20",
  },
];
