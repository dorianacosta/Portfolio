import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Education"
            title="Academic Background"
            description="Computer Science foundations with a focus on AI and business analytics."
          />
        </FadeIn>

        <div className="mt-12 space-y-4">
          {cvData.education.map((edu, i) => (
            <FadeIn key={edu.school} delay={i * 0.1}>
              <div className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <GraduationCap size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-semibold text-sm">{edu.school}</h3>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                      {edu.notes && (
                        <p className="text-xs text-muted-foreground/70 mt-0.5">{edu.notes}</p>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
