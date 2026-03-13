import { Link } from "react-router-dom";
import { DisplayCard } from "@/components/ui/display-cards";
import { cvData } from "@/data/cv";
import { User, Briefcase, FolderOpen, Zap, GraduationCap, Mail } from "lucide-react";

const OVERLAY =
  "before:absolute before:w-full before:h-full before:rounded-xl " +
  "before:content-[''] before:bg-blend-overlay before:bg-background/50 " +
  "before:left-0 before:top-0 before:transition-opacity before:duration-700 " +
  "grayscale-[100%] hover:grayscale-0 hover:before:opacity-0";

const navCards = [
  {
    to: "/about",
    icon: <User className="size-4 text-foreground/70" />,
    title: "About",
    description: "Background & interests",
    date: "El Paso, TX",
    className:
      `[grid-area:stack] hover:-translate-y-10 ${OVERLAY}`,
  },
  {
    to: "/experience",
    icon: <Briefcase className="size-4 text-foreground/70" />,
    title: "Experience",
    description: "Co-Founder · AI Intern",
    date: `${cvData.experience.length} roles`,
    className:
      `[grid-area:stack] translate-x-[4.5rem] translate-y-[2.4375rem] hover:-translate-y-2 ${OVERLAY}`,
  },
  {
    to: "/projects",
    icon: <FolderOpen className="size-4 text-foreground/70" />,
    title: "Projects",
    description: cvData.projects.map((p) => p.name).join(" · "),
    date: "AI-powered builds",
    className:
      `[grid-area:stack] translate-x-[9rem] translate-y-[4.875rem] hover:translate-y-4 ${OVERLAY}`,
  },
  {
    to: "/skills",
    icon: <Zap className="size-4 text-foreground/70" />,
    title: "Skills",
    description: "Python · TypeScript · Swift",
    date: "LangChain · FAISS · React",
    className:
      `[grid-area:stack] translate-x-[13.5rem] translate-y-[7.3125rem] hover:translate-y-10 ${OVERLAY}`,
  },
  {
    to: "/education",
    icon: <GraduationCap className="size-4 text-foreground/70" />,
    title: "Education",
    description: "WGU · UTEP · EPCC",
    date: "B.S. CS · 2026",
    className:
      `[grid-area:stack] translate-x-[18rem] translate-y-[9.75rem] hover:translate-y-[7rem] ${OVERLAY}`,
  },
  {
    to: "/contact",
    icon: <Mail className="size-4 text-foreground/70" />,
    title: "Contact",
    description: "Open to opportunities",
    date: cvData.email,
    className:
      `[grid-area:stack] translate-x-[22.5rem] translate-y-[12.1875rem] hover:translate-y-[9.75rem] ${OVERLAY}`,
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="grid [grid-template-areas:'stack'] place-items-center -translate-x-[11.25rem] -translate-y-[6.09rem]">
        {navCards.map(({ to, icon, title, description, date, className }) => (
          <Link
            key={to}
            to={to}
            className="[grid-area:stack] focus:outline-none"
            style={{ gridArea: "stack" }}
          >
            <DisplayCard
              icon={icon}
              title={title}
              description={description}
              date={date}
              className={`cursor-pointer ${className}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
