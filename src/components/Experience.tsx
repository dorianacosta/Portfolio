import { useState } from "react";
import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/FadeIn";
import { ChevronDown, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Experience"
            title="Where I've Worked"
            description="Building AI systems and software products across startups and professional practices — each role chosen deliberately to compound skills in a specific domain."
          />
        </FadeIn>

        <div className="mt-12 space-y-3">
          {cvData.experience.map((job, i) => {
            const isOpen = openIndex === i;
            const j = job as typeof job & { context?: string; tech?: readonly string[]; highlight?: string };
            return (
              <FadeIn key={job.company} delay={i * 0.1}>
                <div
                  className={cn(
                    "rounded-xl border bg-card transition-colors duration-200",
                    isOpen
                      ? "border-primary/40 shadow-[0_0_20px_-4px_hsl(var(--primary)/0.15)]"
                      : "border-border hover:border-primary/25"
                  )}
                >
                  {/* Header row */}
                  <button
                    className="w-full text-left p-5 flex items-center gap-4 group"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1 md:gap-8 items-start">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm font-semibold">{job.role}</h3>
                          {i === 0 && (
                            <Badge variant="accent" className="text-[10px]">Current</Badge>
                          )}
                          {i === 1 && (
                            <Badge variant="accent" className="text-[10px]">Current</Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {job.company} · {job.period}
                        </p>
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

                  {/* Expandable detail */}
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

                          {/* Context paragraph */}
                          {j.context && (
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {j.context}
                            </p>
                          )}

                          {/* Highlight callout */}
                          {j.highlight && (
                            <div className="flex items-start gap-2.5 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
                              <Zap size={13} className="flex-shrink-0 mt-0.5 text-primary/70" />
                              <p className="text-xs text-primary/80 leading-relaxed">{j.highlight}</p>
                            </div>
                          )}

                          {/* What I did */}
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-2.5">
                              What I Did
                            </p>
                            <ul className="space-y-2">
                              {job.bullets.map((bullet) => (
                                <li key={bullet} className="text-sm text-muted-foreground flex gap-2.5">
                                  <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-primary/60" />
                                  <span className="leading-relaxed">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech used */}
                          {j.tech && j.tech.length > 0 && (
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-2">
                                Tech Used
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {j.tech.map((t) => (
                                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
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
      </div>
    </section>
  );
}

