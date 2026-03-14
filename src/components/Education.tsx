import { useState } from "react";
import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, ChevronDown, BookOpen, Lightbulb, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const highlights: Record<string, {
  courses: string[];
  focus: string;
  keyTakeaways: string[];
  beyondCoursework: string;
}> = {
  "Western Governors University": {
    focus: "Algorithms · Systems Design · Software Engineering",
    courses: [
      "Data Structures & Algorithms",
      "Discrete Mathematics",
      "Database Management",
      "Operating Systems",
      "Software Engineering",
      "Computer Architecture",
      "Network & Security Foundations",
      "Project Management",
    ],
    keyTakeaways: [
      "WGU's competency-based model means you move when you demonstrate mastery — not when a semester ends. I can spend a week on something I know and months on something I want to own.",
      "No filler coursework. Every unit maps directly to either CS fundamentals or professional engineering practice.",
      "Set my own graduation date: Fall 2026 — a timeline I control, not one dictated by a course catalog.",
    ],
    beyondCoursework:
      "WGU is the degree program I designed for myself. It rewards exactly the mindset I operate with professionally: measure what you know, accelerate past what you don't need to re-learn, and invest deeply in the gaps. The self-directed structure mirrors how I approach technical growth at work.",
  },
  "University of Texas at El Paso": {
    focus: "AI · Machine Learning · NLP · Business Analytics",
    courses: [
      "Machine Learning",
      "Natural Language Processing",
      "Intelligent Systems",
      "Data Analytics",
      "Information Systems",
      "Business Intelligence",
      "Database Systems",
      "Enterprise Architecture",
    ],
    keyTakeaways: [
      "Gained rigorous ML theory — gradient descent, backpropagation, transformer architectures — that I apply directly when evaluating and tuning models in production.",
      "The Business Analytics minor changed how I think: every engineering decision has an ROI, and shipping code that doesn't move a measurable needle is waste.",
      "NLP coursework gave me the theoretical foundation for the RAG systems and LLM integrations I build professionally.",
    ],
    beyondCoursework:
      "UTEP gave me valuable AI theory and two minors that directly inform how I build and pitch products. I left because the system wasn't built for people who are already working at the intersection of what they're studying. My projected graduation date with UTEP was Fall 2028 — no summer classes, mandatory courses irrelevant to any career I was building, no flexibility. I wasn't willing to spend four more years completing paperwork for a credential while building real products. I transferred to WGU and took control of the timeline.",
  },
  "El Paso Community College": {
    focus: "Java · Python · C++ · Discrete Math · Data Structures",
    courses: [
      "Data Structures",
      "Algorithms",
      "Java Programming",
      "Python Programming",
      "C++ Fundamentals",
      "Discrete Mathematics",
      "Calculus I & II",
      "Linear Algebra",
    ],
    keyTakeaways: [
      "Two years of grinding through low-level CS fundamentals — recursion, pointer arithmetic, tree traversal, proof writing — built the mental models that make everything else faster to learn.",
      "GPA 3.60 while working on personal projects. The discipline of doing both in parallel set the tone for how I operate now.",
      "EPCC was the most cost-efficient path to CS fundamentals available. No debt, transferable credits, and a strong academic record to show for it.",
    ],
    beyondCoursework:
      "Community college gets dismissed as a lesser path, but EPCC gave me exactly what I needed: two years to build a rigorous technical foundation without taking on debt or sitting through a university's general education requirements. I came out with a 3.60 GPA, an A.S. in Computer Science, and a clear picture of what I wanted to learn next. The fundamentals I built there are the reason I can move fast now.",
  },
};

const journeySteps = [
  { school: "EPCC", years: "2022–2024", label: "Fundamentals", color: "bg-primary/40" },
  { school: "UTEP", years: "2024–2025", label: "AI Theory", color: "bg-primary/60" },
  { school: "WGU", years: "2025–2026", label: "B.S. CS", color: "bg-primary" },
];

export function Education() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Education"
            title="Academic Background"
            description="A deliberate, non-linear path — built around maximizing actual learning and minimizing time spent satisfying systems that weren't designed for someone who already knows what they want to build."
          />
        </FadeIn>

        {/* Journey timeline */}
        <FadeIn delay={0.1}>
          <div className="mt-10 rounded-xl border border-border bg-card p-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-5">
              Academic Journey
            </p>
            <div className="flex items-center gap-0 flex-wrap sm:flex-nowrap">
              {journeySteps.map((step, i) => (
                <div key={step.school} className="flex items-center gap-0 flex-1 min-w-0">
                  <div className="flex-1 min-w-0">
                    <div className={cn("h-1.5 rounded-full w-full", step.color)} />
                    <div className="mt-2.5">
                      <p className="text-xs font-semibold text-foreground">{step.school}</p>
                      <p className="text-[10px] text-muted-foreground">{step.years}</p>
                      <p className="text-[10px] text-muted-foreground/60 mt-0.5">{step.label}</p>
                    </div>
                  </div>
                  {i < journeySteps.length - 1 && (
                    <ArrowRight size={14} className="flex-shrink-0 text-muted-foreground/30 mx-3 mb-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* School cards */}
        <div className="mt-5 space-y-3">
          {cvData.education.map((edu, i) => {
            const isOpen = openIndex === i;
            const info = highlights[edu.school];
            return (
              <FadeIn key={edu.school} delay={i * 0.1}>
                <div
                  className={cn(
                    "rounded-xl border bg-card transition-colors duration-200",
                    isOpen
                      ? "border-primary/40 shadow-[0_0_20px_-4px_hsl(var(--primary)/0.15)]"
                      : "border-border hover:border-primary/25"
                  )}
                >
                  <button
                    className="w-full text-left p-5 flex items-center gap-4"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <GraduationCap size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h3 className="font-semibold text-sm">{edu.school}</h3>
                          <p className="text-sm text-muted-foreground">{edu.degree}</p>
                          {info && (
                            <p className="text-[11px] text-muted-foreground/55 mt-0.5">
                              {info.focus}
                            </p>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full whitespace-nowrap">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "flex-shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-border/50 pt-4 space-y-5">

                          {/* Notes / context */}
                          {edu.notes && (
                            <p className="text-sm text-muted-foreground/80 leading-relaxed whitespace-pre-line">
                              {edu.notes}
                            </p>
                          )}

                          {/* Key takeaways */}
                          {info?.keyTakeaways && (
                            <div>
                              <div className="flex items-center gap-1.5 mb-3">
                                <Lightbulb size={11} className="text-primary/50" />
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                                  Key Takeaways
                                </p>
                              </div>
                              <ul className="space-y-2.5">
                                {info.keyTakeaways.map((t) => (
                                  <li key={t} className="flex gap-2.5">
                                    <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary/50" />
                                    <p className="text-sm text-muted-foreground leading-relaxed">{t}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Beyond coursework callout */}
                          {info?.beyondCoursework && (
                            <div className="rounded-lg border border-primary/15 bg-primary/5 px-4 py-3.5">
                              <p className="text-xs text-muted-foreground/80 leading-relaxed">{info.beyondCoursework}</p>
                            </div>
                          )}

                          {/* Relevant coursework */}
                          {info && (
                            <div>
                              <div className="flex items-center gap-1.5 mb-2.5">
                                <BookOpen size={11} className="text-muted-foreground/50" />
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                                  Relevant Coursework
                                </p>
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {info.courses.map((course) => (
                                  <div
                                    key={course}
                                    className="text-xs text-muted-foreground bg-secondary/60 rounded-lg px-3 py-2 border border-border/40 leading-snug"
                                  >
                                    {course}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* The real story */}
        <FadeIn delay={0.35}>
          <div className="mt-6 rounded-xl border border-border/60 bg-card/50 p-5 space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
              The Real Story
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The traditional university path wasn't optimized for how I learn or what I was already building. EPCC gave me strong fundamentals. UTEP gave me AI theory and real exposure to ML systems. But when I mapped out the path to a UTEP degree — no summer classes, mandatory courses completely disconnected from any career I was building, a projected graduation of Fall 2028 — it was obvious the system wasn't designed for me.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I left, enrolled at WGU, and set my own graduation date: <span className="text-foreground font-medium">Fall 2026</span>. WGU's competency-based model lets me move at the speed of my actual understanding, not a semester calendar. I'm completing a B.S. in Computer Science two years faster than UTEP would have allowed — while co-founding a company and building production AI systems professionally.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The credential matters because it opens doors. But the knowledge and the work ethic came from building things, not from sitting in lecture halls waiting for a date on a calendar.
            </p>
          </div>
        </FadeIn>

        {/* Self-directed learning note */}
        <FadeIn delay={0.45}>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Books & Courses", value: "Hands On ML · LangChain docs · FastAI · FSDL · deeplearning.ai" },
              { label: "By Doing", value: "Every production system I've shipped has taught me more than any course could in the same timeframe." },
              { label: "Graduation", value: "On track for Fall 2026 — two years ahead of where the traditional path would have landed me." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border/60 bg-card/50 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1.5">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

