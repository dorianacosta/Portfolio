import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader eyebrow="About" title="Who I Am" description="" />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
          <FadeIn delay={0.1} direction="left">
            <div className="flex flex-col items-center lg:items-start gap-5">
              <div className="relative w-56 h-56 lg:w-72 lg:h-72 mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/60 via-primary/20 to-transparent p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-background" />
                </div>
                <img
                  src="/profile.jpeg"
                  alt="Dorian Acosta"
                  className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl object-cover object-top shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_-8px_hsl(224_76%_62%/0.4)] pointer-events-none" />
              </div>
              <div className="w-full grid grid-cols-2 gap-3">
                {[
                  { label: "Location", value: "El Paso, TX" },
                  { label: "Status", value: "Open to Work" },
                  { label: "Focus", value: "AI Engineering" },
                  { label: "Degree", value: "B.S. Comp. Sci." },
                ].map((item) => (
                  <div key={item.label} className="border border-border rounded-lg p-3 bg-card">
                    <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                    <div className="text-sm font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-foreground text-lg">{cvData.bio}</p>
                <p>
                  Beyond engineering, I actively build and launch ventures —
                  including startups, e-commerce brands, and digital marketing
                  systems that leverage data analytics, SEO, and automation.
                </p>
                <p>
                  My long-term goal is to contribute to innovative technology
                  systems that push forward artificial intelligence, software
                  engineering, and digital infrastructure.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Areas of Interest
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cvData.interests.map((interest) => (
                    <Badge key={interest} variant="outline" className="py-1.5 px-3">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
