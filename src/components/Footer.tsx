import { cvData } from "@/data/cv";

export function Footer() {
  return (
    <footer className="py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground font-medium">{cvData.name}</span>.
          Built with React, Tailwind CSS & shadcn/ui.
        </p>
        <div className="flex gap-4">
          <a
            href={cvData.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={cvData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={cvData.emailHref}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
