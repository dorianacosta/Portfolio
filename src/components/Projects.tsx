import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Projects"
            title="Things I've Built"
            description="AI-powered applications and full-stack systems tackling real operational problems."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvData.projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.12}>
              <Card className="group relative overflow-hidden border-gradient hover:glow transition-all duration-300 h-full">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base">{project.name}</CardTitle>
                      <CardDescription className="text-xs mt-0.5">
                        {project.subtitle} · {project.period}
                      </CardDescription>
                    </div>
                    <ExternalLink size={14} className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <ul className="space-y-1">
                    {project.bullets.map((b) => (
                      <li key={b} className="text-xs text-muted-foreground flex gap-2">
                        <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
