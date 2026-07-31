import { routes } from "./routes";

export interface NavLink {
  label: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { label: "Services", href: routes.services },
  { label: "Portfolio", href: routes.portfolio },
  { label: "About", href: routes.about },
  { label: "Blog", href: routes.blog },
  { label: "Careers", href: routes.careers },
  { label: "Contact", href: routes.contact },
];

export const footerNavLinks = {
  company: [
    { label: "About", href: routes.about },
    { label: "Careers", href: routes.careers },
    { label: "Contact", href: routes.contact },
    { label: "Book Consultation", href: routes.bookConsultation },
  ],
  services: [
    { label: "Web Development", href: routes.service("web-development") },
    { label: "Mobile Apps", href: routes.service("mobile-apps") },
    { label: "AI Solutions", href: routes.service("ai-solutions") },
    { label: "Digital Marketing", href: routes.service("digital-marketing") },
  ],
  legal: [
    { label: "Privacy Policy", href: routes.privacy },
    { label: "Terms of Service", href: routes.terms },
  ],
};
