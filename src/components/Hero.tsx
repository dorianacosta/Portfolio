import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    <motion.section
      className="relative min-h-screen flex items-center justify-center px-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Name + title — pinned to top center */}
      <motion.div
        className="absolute top-6 left-1/2 -translate-x-1/2 text-center select-none whitespace-nowrap"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <p className="text-xl font-bold tracking-[0.12em] text-white">
          Dorian Acosta
        </p>
        <p className="text-xs text-white tracking-[0.22em] uppercase mt-1">
          CS Major &nbsp;·&nbsp; AI &amp; Software Engineer
        </p>
      </motion.div>

      {/* Navigation card stack — original centered position */}
      <motion.div
        className="grid [grid-template-areas:'stack'] place-items-center -translate-x-[11.25rem] -translate-y-[6.09rem]"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
      >
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
      </motion.div>
    </motion.section>
  );
}

