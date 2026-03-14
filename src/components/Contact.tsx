import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone, CheckCircle2, MapPin, Timer, Target } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const contactLinks = [
  { icon: Mail,     label: "Email",    value: cvData.email,                        href: cvData.emailHref },
  { icon: Github,   label: "GitHub",   value: "github.com/dorianacosta",           href: cvData.github },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dorianjamesacosta", href: cvData.linkedin },
  { icon: Phone,    label: "Phone",    value: cvData.phone,                        href: `tel:${cvData.phone.replace(/\D/g, "")}` },
];

const lookingFor = [
  "AI / ML engineering roles (full-time or internship)",
  "Full-stack product engineering on applied AI products",
  "Technical co-founder or founding engineer opportunities",
  "Consulting on RAG systems, data pipelines, or LLM integration",
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Contact"
            title="Let's Work Together"
            description="Open to internships, full-time roles, collaborative projects, and entrepreneurial ventures. Reach out through any of the channels below."
          />
        </FadeIn>

        {/* What I'm looking for */}
        <FadeIn delay={0.1}>
          <div className="mt-10 rounded-xl border border-border bg-card p-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-4">
              What I'm Looking For
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {lookingFor.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-primary/60" />
                  <p className="text-sm text-muted-foreground leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact links */}
          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-4">
              Reach Out
            </p>
            {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-card/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="text-sm font-medium">{value}</div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Right column */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-4 h-full">
              {/* CTA card */}
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold mb-2">Building the future of AI & software</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    My long-term goal is to contribute to intelligent systems that advance
                    AI engineering, software infrastructure, and digital operations.
                    If you're working on hard problems, I want to hear about it.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a href={cvData.emailHref}><Mail className="mr-1.5" />Send an Email</a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={cvData.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-1.5" />LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              {/* Availability card */}
              <div className="rounded-xl border border-border/60 bg-card/50 p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-sm font-medium">Available for opportunities</p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={13} strokeWidth={1.5} className="flex-shrink-0 text-white" />
                    <span>Based in El Paso, TX — open to remote or relocation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer size={13} strokeWidth={1.5} className="flex-shrink-0 text-white" />
                    <span>Typically respond within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={13} strokeWidth={1.5} className="flex-shrink-0 text-white" />
                    <span>Strongest fit: AI engineering, backend systems, iOS</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

