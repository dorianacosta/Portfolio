import { useState } from "react";
import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, FolderOpen, Code2, Cpu } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categoryColors: Record<string, "default" | "accent" | "outline" | "secondary"> = {
  Languages: "accent",
  "Frameworks & Libraries": "default",
  "AI & Data": "accent",
  Tools: "secondary",
};

type SkillDetail = {
  description: string;
  howILearned: string;
  usedIn: string[];
  deepDive: { name: string; note: string }[];
};

const categoryDetails: Record<string, SkillDetail> = {
  Languages: {
    description:
      "Python and TypeScript are my daily drivers — Python for data pipelines, APIs, and ML work; TypeScript for full-stack web. Swift for building production iOS apps, Java for systems coursework foundations, and SQL whenever I need to interrogate relational data or design schema.",
    howILearned:
      "Started with Java in community college, picked up Python through ML coursework and kept it because nothing else comes close for data work. TypeScript came from building the Sorta frontend — JavaScript without types at production scale is a liability. Swift was self-taught through Caravan.",
    usedIn: ["Sorta (TypeScript + Python)", "LegalMind AI (Python)", "Caravan (Swift)", "UTEP coursework (Java)"],
    deepDive: [
      { name: "Python", note: "FastAPI backends, LangChain pipelines, data processing, LLM integration" },
      { name: "TypeScript", note: "React frontends, type-safe API clients, Sorta's entire web stack" },
      { name: "Swift", note: "SwiftUI views, Core Data models, Google Maps SDK integration in Caravan" },
      { name: "SQL", note: "Schema design for clinic data in Sorta, querying and aggregating analytics data" },
      { name: "Java", note: "Data structures, algorithms, OOP fundamentals at EPCC" },
    ],
  },
  "Frameworks & Libraries": {
    description:
      "The scaffolding for every real application I build. React and FastAPI form the core web stack — React for interactive, component-driven frontends; FastAPI for clean async Python APIs with automatic validation. SwiftUI is the iOS UI layer, and Core Data handles persistence. Pandas and NumPy underpin all data manipulation work.",
    howILearned:
      "React through Sorta's frontend — there's no better forcing function than needing a real app to work. FastAPI through the LegalMind AI backend, where I needed fast async endpoints that could handle concurrent LLM API calls. SwiftUI through Caravan — I built the entire app UI from scratch with zero prior Swift experience.",
    usedIn: ["Sorta (React + FastAPI)", "LegalMind AI (FastAPI)", "Caravan (SwiftUI + Core Data)"],
    deepDive: [
      { name: "React", note: "Component-driven UIs, state management, real-time form workflows for clinic staff" },
      { name: "FastAPI", note: "Async Python APIs, dependency injection, automatic OpenAPI docs, background tasks" },
      { name: "SwiftUI", note: "Declarative iOS UIs, animations, navigation stacks, state bindings" },
      { name: "Core Data", note: "Persistent object graph for Cars, Routes, Trips, Users in Caravan" },
      { name: "Pandas / NumPy", note: "Data transformation, cleaning, and statistical computation in ML pipelines" },
    ],
  },
  "AI & Data": {
    description:
      "My primary engineering domain. I architect retrieval-augmented generation systems from scratch — designing chunking strategies, choosing embedding models, configuring vector stores (FAISS for speed, Chroma for persistence), and tuning retrieval parameters. I integrate Claude, OpenAI, and Fireworks.AI for generation and use LangChain to orchestrate multi-step pipelines. Tableau handles the communication layer when insights need to reach non-technical stakeholders.",
    howILearned:
      "Deep-end first. LegalMind AI was the project that forced me to stop treating RAG as a tutorial and start treating it as an engineering discipline. I had to get the answers right enough that a practicing attorney would trust them. Fireworks.AI came from needing lower-latency inference than the major providers could offer for real-time clinic workflows.",
    usedIn: ["LegalMind AI (FAISS + Chroma + LangChain + Claude + OpenAI)", "Sorta (LLM-assisted document generation)"],
    deepDive: [
      { name: "LangChain", note: "RAG pipeline orchestration, document loaders, retrieval chains, prompt templates" },
      { name: "FAISS", note: "High-speed in-memory vector search for real-time legal document retrieval" },
      { name: "Chroma", note: "Persistent vector storage for the full firm archive, incremental ingestion" },
      { name: "Claude API", note: "Primary generation model for legal Q&A — calibrated temperature for factual accuracy" },
      { name: "OpenAI API", note: "Embeddings (text-embedding-3-small), fallback generation, function calling" },
      { name: "Fireworks.AI", note: "Low-latency inference for time-sensitive clinic document workflows" },
      { name: "Tableau", note: "Analytics dashboards for communicating data insights to non-technical stakeholders" },
    ],
  },
  Tools: {
    description:
      "The infrastructure layer everything runs on. Git is non-negotiable from day one on any project. GitHub Actions automates testing and deployment so shipping doesn't require manual steps. Docker keeps environments reproducible across machines and deployment targets. Linux is the production surface for all backend work. Xcode for iOS, VSCode for everything else.",
    howILearned:
      "Git and GitHub became muscle memory through internship work at HelixTech — working on a shared codebase at production scale teaches version control discipline fast. Docker from containerizing Sorta's backend. Linux from running servers and configuring deployment environments from scratch.",
    usedIn: ["All projects (Git)", "Sorta backend (Docker + Linux)", "HelixTech (GitHub Actions CI/CD)", "Caravan (Xcode)"],
    deepDive: [
      { name: "Git", note: "Branching strategies, rebasing, stash management, pull request workflows" },
      { name: "GitHub Actions", note: "CI/CD pipelines — automated test, build, and deploy on push" },
      { name: "Docker", note: "Containerizing FastAPI backends for consistent local and production environments" },
      { name: "Linux", note: "CLI proficiency, SSH, service management, environment configuration" },
      { name: "Xcode", note: "iOS simulators, Instruments profiling, Swift package manager, signing" },
    ],
  },
};

const proficiencyTiers = [
  {
    level: "Expert",
    color: "text-white border-white/30 bg-white/5",
    bar: "bg-white",
    width: "w-full",
    skills: ["Python", "TypeScript", "Swift", "React", "FastAPI", "RAG Systems", "LangChain", "FAISS"],
  },
  {
    level: "Proficient",
    color: "text-white/70 border-white/20 bg-white/5",
    bar: "bg-white/60",
    width: "w-3/4",
    skills: ["SQL", "SwiftUI", "Core Data", "Chroma", "Docker", "GitHub Actions", "Claude API", "OpenAI API"],
  },
  {
    level: "Familiar",
    color: "text-white/45 border-white/15 bg-white/5",
    bar: "bg-white/30",
    width: "w-1/2",
    skills: ["Java", "Pandas", "NumPy", "Flask", "Tableau", "Fireworks.AI", "Linux", "IntelliJ"],
  },
];

const PREVIEW_COUNT = 4;

export function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Skills"
            title="Technical Stack"
            description="Technologies and tools I work with across the full development lifecycle — every item in this list has been used in a real production system or shipped project, not just a tutorial."
          />
        </FadeIn>

        {/* Proficiency tiers */}
        <FadeIn delay={0.1}>
          <div className="mt-10 rounded-xl border border-border bg-card p-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-5">
              Proficiency Tiers
            </p>
            <div className="space-y-5">
              {proficiencyTiers.map((tier) => (
                <div key={tier.level}>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={cn("text-[10px] font-semibold px-2 py-0.5 rounded border tracking-wider", tier.color)}>
                      {tier.level}
                    </div>
                    <div className="flex-1 h-[2px] bg-border/40 rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full", tier.bar, tier.width)} />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tier.skills.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Category deep-dives */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(Object.entries(cvData.skills) as [string, readonly string[]][]).map(
            ([category, items], i) => {
              const isOpen = openIndex === i;
              const preview = items.slice(0, PREVIEW_COUNT);
              const rest = items.slice(PREVIEW_COUNT);
              const variant = categoryColors[category] ?? "outline";
              const detail = categoryDetails[category];

              return (
                <FadeIn key={category} delay={i * 0.1}>
                  <div
                    className={cn(
                      "rounded-xl border bg-card transition-colors duration-200",
                      isOpen
                        ? "border-primary/40 shadow-[0_0_20px_-4px_hsl(var(--primary)/0.15)]"
                        : "border-border hover:border-primary/25"
                    )}
                  >
                    <button
                      className="w-full text-left p-5 group"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold text-foreground">{category}</h3>
                        <ChevronDown
                          size={16}
                          className={cn(
                            "text-muted-foreground transition-transform duration-300",
                            isOpen && "rotate-180"
                          )}
                        />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {preview.map((item) => (
                          <Badge key={item} variant={variant} className="text-xs">{item}</Badge>
                        ))}
                        {!isOpen && rest.length > 0 && (
                          <Badge variant="outline" className="text-xs text-muted-foreground">
                            +{rest.length} more
                          </Badge>
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="rest"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-border/50 pt-4 space-y-5">

                            {/* Remaining badges */}
                            {rest.length > 0 && (
                              <div className="flex flex-wrap gap-1.5">
                                {rest.map((item) => (
                                  <Badge key={item} variant={variant} className="text-xs">{item}</Badge>
                                ))}
                              </div>
                            )}

                            {/* How I use it */}
                            {detail && (
                              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                {detail.description}
                              </p>
                            )}

                            {/* How I learned */}
                            {detail?.howILearned && (
                              <div className="rounded-lg border border-border/50 bg-secondary/30 px-4 py-3">
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1.5">
                                  How I Learned It
                                </p>
                                <p className="text-xs text-muted-foreground leading-relaxed">{detail.howILearned}</p>
                              </div>
                            )}

                            {/* Used in projects */}
                            {detail?.usedIn && (
                              <div>
                                <div className="flex items-center gap-1.5 mb-2">
                                  <FolderOpen size={11} className="text-muted-foreground/50" />
                                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                                    Used In
                                  </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                  {detail.usedIn.map((p) => (
                                    <p key={p} className="text-xs text-muted-foreground/70">{p}</p>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Deep dive per tool */}
                            {detail?.deepDive && (
                              <div>
                                <div className="flex items-center gap-1.5 mb-2.5">
                                  <Code2 size={11} className="text-muted-foreground/50" />
                                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                                    Tool Breakdown
                                  </p>
                                </div>
                                <div className="space-y-2">
                                  {detail.deepDive.map((d) => (
                                    <div key={d.name} className="flex gap-3">
                                      <span className="text-xs font-medium text-foreground/70 w-28 flex-shrink-0">{d.name}</span>
                                      <span className="text-xs text-muted-foreground/60 leading-relaxed">{d.note}</span>
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
            }
          )}
        </div>

        {/* Learning approach */}
        <FadeIn delay={0.35}>
          <div className="mt-5 rounded-xl border border-border/60 bg-card/50 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={13} className="text-muted-foreground/50" />
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                How I Learn New Tech
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { step: "01", title: "Build something real", body: "I don't learn from tutorials. I pick a tool because a real project needs it, then figure it out under the pressure of needing it to actually work." },
                { step: "02", title: "Read the source", body: "Documentation first, then source code when docs hit a wall. Understanding why a library works the way it does changes how I use it." },
                { step: "03", title: "Teach it back", body: "If I can't explain it clearly to someone else, I don't know it yet. Production code, writeups, and code reviews are my forcing functions." },
              ].map((item) => (
                <div key={item.step} className="space-y-1.5">
                  <p className="text-[10px] text-muted-foreground/30 font-mono">{item.step}</p>
                  <p className="text-sm font-medium text-foreground/80">{item.title}</p>
                  <p className="text-xs text-muted-foreground/65 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Currently exploring */}
        <FadeIn delay={0.45}>
          <div className="mt-4 rounded-xl border border-border/60 bg-card/50 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-3">
              Currently Exploring
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {["Agentic AI Systems", "Fine-tuning LLMs", "Rust", "Edge Inference", "Multi-agent Orchestration"].map((item) => (
                <Badge key={item} variant="outline" className="text-xs text-muted-foreground/70 border-border/50">
                  {item}
                </Badge>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/50 leading-relaxed">
              Areas I'm actively learning or prototyping outside of production work. Agentic systems and multi-agent orchestration directly inform the next phase of Sorta's architecture — autonomous document review and correction loops.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
