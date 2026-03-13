import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";

const categoryColors: Record<string, "default" | "accent" | "outline" | "secondary"> = {
  Languages: "accent",
  "Frameworks & Libraries": "default",
  "AI & Data": "accent",
  Tools: "secondary",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Skills"
            title="Technical Stack"
            description="Technologies and tools I work with across the full development lifecycle."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {(Object.entries(cvData.skills) as [string, readonly string[]][]).map(
            ([category, items], i) => (
              <FadeIn key={category} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors">
                  <h3 className="text-sm font-semibold mb-3 text-foreground">{category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <Badge key={item} variant={categoryColors[category] ?? "outline"} className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
}
