import { useState } from "react";
import { cvData } from "@/data/cv";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Github, Lock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// ── Code snippets pulled from GitHub repos ───────────────────────────────────
const CODE_SNIPPETS: Record<string, { lang: string; filename: string; code: string }> = {
  Caravan: {
    lang: "Swift",
    filename: "ContentView.swift",
    code: `struct ContentView: View {
    @State private var showStartup     = false
    @State private var textOpacity     = 0.0
    @State private var finishedStartup = false
    @State private var isLoggedIn      = false
    private let letters = Array("Caravan")

    var body: some View {
        ZStack {
            Color.black.ignoresSafeArea()
            if showStartup && !finishedStartup {
                HStack(spacing: 0) {
                    ForEach(letters.indices, id: \\.self) { i in
                        Text(String(letters[i]))
                            .font(.custom(
                                "BitcountGridDouble-Regular",
                                size: 78))
                            .foregroundColor(.white)
                            .opacity(textOpacity)
                    }
                }
            } else if finishedStartup && !isLoggedIn {
                LoginView(onLoginSuccess: didLogin)
            } else if mainMenu {
                MainMenuView(selectedTab: $selectedTab,
                             user: $currentUser,
                             onSignOut: signOut)
            }
        }
        .onAppear(perform: runSequence)
    }

    private func flickerLoop() {
        guard showStartup && !finishedStartup else { return }
        let t = Double.random(in: 0.2...1.0)
        let d = Double.random(in: 0.02...0.1)
        withAnimation(.linear(duration: d)) { textOpacity = t }
        DispatchQueue.main.asyncAfter(deadline: .now() + d) {
            withAnimation(.linear(duration: d)) { textOpacity = 1 }
            flickerLoop()
        }
    }
}`,
  },
  Sorta: {
    lang: "Python",
    filename: "main.py",
    code: `from fastapi import FastAPI
from app.database import Base, engine
from app.routers import templates, patients, forms
from fastapi.middleware.cors import CORSMiddleware


Base.metadata.create_all(bind=engine)

app = FastAPI(title="Form Intelligence Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # demo-only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(templates.router)
app.include_router(patients.router)
app.include_router(forms.router)`,
  },
  "LegalMind AI": {
    lang: "TypeScript",
    filename: "page.tsx",
    code: `const personalityPrompts: Record<string, string> = {
  "senior-partner":
    "You are the Senior Partner at a prestigious law " +
    "firm with 30+ years of experience.",
  "associate-attorney":
    "You are a bright Associate Attorney. Cite relevant " +
    "statutes and cases.",
  "legal-researcher":
    "Specialized Legal Research expert. Be scholarly " +
    "and exceptionally thorough.",
};

const systemPrompt =
  \`\${legalKnowledge}\\n\\n\${basePrompt}\${spiceGuide}\`;

async function handleSendMessage() {
  if (!message.trim() || loading) return;
  setLoading(true);
  try {
    const response = await chatProvider.sendMessage(
      message,
      systemPrompt,
      0.1,           // low temp → legal accuracy
      attachedFiles,
    );
    setMessages(response.messages);
    setMessage("");
  } catch (e) {
    console.error("Message failed:", e);
  } finally {
    setLoading(false);
  }
}`,
  },
};

// ── Component ────────────────────────────────────────────────────────────────
export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

        {/* 2×2 grid — last card spans full width if count is odd */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cvData.projects.map((project, i) => {
            const snippet = CODE_SNIPPETS[project.name];
            const isOpen = openIndex === i;
            const githubUrl =
              "github" in project
                ? (project as { github?: string }).github
                : undefined;
            const p = project as typeof project & { why?: string; learned?: string };
            const isLastOdd = cvData.projects.length % 2 !== 0 && i === cvData.projects.length - 1;

            return (
              <FadeIn key={project.name} delay={i * 0.1} className={isLastOdd ? "md:col-span-2" : ""}>
                <div className="flex flex-col rounded-2xl border border-border overflow-hidden h-full bg-[hsl(0,0%,5%)]">
                  {/* ── Card header ─────────────────────────────────── */}
                  <div className="w-full text-center px-5 pt-6 pb-5">
                      <p className="text-sm font-semibold tracking-tight text-foreground">
                        {project.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {project.subtitle} · {project.period}
                      </p>
                      <div className="flex flex-wrap justify-center gap-1 mt-2.5">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="text-[9px] px-1.5 py-0">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      {githubUrl && (
                        <a
                          href={githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github size={10} />
                          View on GitHub
                        </a>
                      )}
                  </div>

                  {/* ── Code showcase ──────────────────────────────── */}
                  {snippet ? (
                    <div className="flex-1 flex flex-col border-t border-border/50 bg-[hsl(0,0%,4%)]">
                      {/* File bar */}
                      <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/40 bg-[hsl(0,0%,6%)]">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono text-white/50 tracking-widest uppercase">
                            {snippet.lang}
                          </span>
                          <span className="text-[9px] text-muted-foreground/40 font-mono">
                            {snippet.filename}
                          </span>
                        </div>
                        <span className="text-[9px] font-medium text-white/55 tracking-widest uppercase border border-white/15 rounded px-1.5 py-0.5">
                          code sample
                        </span>
                      </div>
                      {/* Scrollable code */}
                      <div className="overflow-auto max-h-64">
                        <pre className="p-3.5 text-[10.5px] font-mono leading-relaxed text-slate-300/85 whitespace-pre">
                          <code>{snippet.code}</code>
                        </pre>
                      </div>
                      {/* Bottom accent line */}
                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-auto" />
                    </div>
                  ) : (
                    <div className="flex-1 border-t border-border/50 bg-[hsl(0,0%,4%)] flex flex-col items-center justify-center gap-2 py-10 text-center">
                      <Lock size={16} className="text-muted-foreground/30" />
                      <p className="text-[10px] text-muted-foreground/40">
                        Private repository
                      </p>
                    </div>
                  )}

                  {/* ── Expandable details ─────────────────────────── */}
                  <div className="border-t border-border/40 bg-card">
                    <button
                      className="w-full text-left px-4 py-3 flex items-center justify-between group"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-[10px] text-muted-foreground group-hover:text-foreground transition-colors">
                        {isOpen ? "Hide details" : "Show details"}
                      </span>
                      <ChevronDown
                        size={12}
                        className={cn(
                          "text-muted-foreground transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 border-t border-border/30 pt-3 space-y-4">

                            {/* Overview */}
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {project.description}
                            </p>

                            {/* Why I built this */}
                            {p.why && (
                              <div>
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/45 mb-1.5">
                                  Why I Built This
                                </p>
                                <p className="text-xs text-muted-foreground leading-relaxed">{p.why}</p>
                              </div>
                            )}

                            {/* What I learned */}
                            {p.learned && (
                              <div>
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/45 mb-1.5">
                                  What I Learned
                                </p>
                                <p className="text-xs text-muted-foreground leading-relaxed">{p.learned}</p>
                              </div>
                            )}

                            {/* Feature bullets */}
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/45 mb-1.5">
                                Key Features
                              </p>
                              <ul className="space-y-1.5">
                                {project.bullets.map((b) => (
                                  <li key={b} className="text-xs text-muted-foreground flex gap-2">
                                    <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-white/30" />
                                    <span className="leading-relaxed">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
