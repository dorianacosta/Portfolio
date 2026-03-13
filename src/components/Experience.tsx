import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Experience"
            title="Where I've Worked"
            description="Building AI systems and software products across startups and professional practices."
          />
        </FadeIn>

        <div className="mt-12 space-y-6">
          {cvData.experience.map((job, i) => (
            <FadeIn key={job.company} delay={i * 0.1}>
              <div
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-6 rounded-xl border border-border bg-card transition-colors hover:border-primary/30 hover:bg-card/80",
                  i === 0 && "border-primary/20 glow"
                )}
              >
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-foreground mb-1">{job.company}</div>
                  <div className="text-xs text-muted-foreground">{job.period}</div>
                  {i === 0 && (
                    <Badge variant="accent" className="mt-2 text-[10px]">Current</Badge>
                  )}
                </div>
                <div>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div>
                      <h3 className="text-base font-semibold">{job.role}</h3>
                      <p className="text-sm text-muted-foreground md:hidden">
                        {job.company} · {job.period}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm text-muted-foreground flex gap-2">
                        <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary/60" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
