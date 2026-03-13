import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const contactLinks = [
  { icon: Mail,    label: "Email",    value: cvData.email,                        href: cvData.emailHref },
  { icon: Github,  label: "GitHub",   value: "github.com/dorianacosta",           href: cvData.github },
  { icon: Linkedin,label: "LinkedIn", value: "linkedin.com/in/dorianjamesacosta", href: cvData.linkedin },
  { icon: Phone,   label: "Phone",    value: cvData.phone,                        href: `tel:${cvData.phone.replace(/\D/g, "")}` },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="Contact"
            title="Let's Work Together"
            description="Open to internships, collaborative projects, and entrepreneurial ventures. Reach out and let's build something."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
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

          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-border bg-card p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">Building the future of AI & software</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  My long-term goal is to contribute to innovative technology systems that advance
                  AI engineering, software infrastructure, and digital operations. If you're working
                  on hard problems, I want to hear about it.
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
