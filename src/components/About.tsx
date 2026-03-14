import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { Code2, Cpu, TrendingUp, Users } from "lucide-react";

const philosophyCards = [
  {
    icon: Code2,
    title: "Build for Real Problems",
    body: "I don't build demos — I build software that runs in clinics and law offices where mistakes cost time, money, and trust. The problem has to be real before the code is worth writing.",
  },
  {
    icon: Cpu,
    title: "Own the Full Stack",
    body: "From database schema to deployment pipeline to user-facing UI, I approach each system as a whole. Siloed engineers miss the performance and reliability problems that live at the seams.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    body: "Whether it's benchmarking RAG retrieval quality, profiling app render cycles, or measuring documentation throughput in a clinic — I measure before and after every optimization.",
  },
  {
    icon: Users,
    title: "Ship, Talk to Users, Iterate",
    body: "The best technical insight I've had in every project came from a conversation with the people actually using it. Attorneys caught hallucination edge cases. Clinicians redefined batch workflows. Ship early, learn fast.",
  },
];

const currentlyBuilding = [
  {
    name: "Sorta",
    description: "AI paperwork automation platform for outpatient specialty clinics. In active development and pilot testing.",
    status: "In Development",
  },
  {
    name: "LegalMind AI",
    description: "RAG-powered legal assistant for front-desk staff at Davie & Valdez Law Office. Deployed and in daily use.",
    status: "Deployed",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader eyebrow="About" title="Who I Am" description="" />
        </FadeIn>

        {/* Profile + bio */}
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
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_-8px_rgba(255,255,255,0.35)] pointer-events-none" />
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
                  systems that leverage data analytics, SEO, and automation. I
                  think of software not as a job but as a compounding skill — every
                  system I build teaches me something that makes the next one faster,
                  more reliable, and closer to what the user actually needs.
                </p>
                <p>
                  My long-term goal is to contribute to the infrastructure of
                  intelligent systems — the kind that outlast the teams that built
                  them and keep getting better as the world feeds them more data.
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

        {/* Engineering philosophy */}
        <FadeIn delay={0.25}>
          <div className="mt-16">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-5">
              Engineering Philosophy
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {philosophyCards.map((card, i) => (
                <FadeIn key={card.title} delay={0.1 + i * 0.07}>
                  <div className="rounded-xl border border-border bg-card p-5 flex gap-4 items-start">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mt-0.5">
                      <card.icon size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">{card.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Currently building */}
        <FadeIn delay={0.35}>
          <div className="mt-10">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-5">
              What I'm Building Now
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentlyBuilding.map((project) => (
                <div key={project.name} className="rounded-xl border border-border bg-card/50 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold">{project.name}</h4>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${
                      project.status === "Deployed"
                        ? "border-green-500/30 text-green-400/80 bg-green-500/5"
                        : "border-primary/30 text-primary/70 bg-primary/5"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

