export const cvData = {
  name: "Dorian Acosta",
  title: "AI & Software Engineer",
  tagline:
    "Building intelligent systems, scalable software, and data-driven businesses.",
  email: "dorianjamesacosta@gmail.com",
  emailHref: "mailto:dorianjamesacosta@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Let%27s%20Connect",
  phone: "(915) 929-8835",
  linkedin: "https://www.linkedin.com/in/dorianjamesacosta/",
  github: "https://github.com/dorianacosta",
  bio: "I am an Artificial Intelligence and Computer Science student combining software engineering, AI development, and digital entrepreneurship. I design technical solutions that solve real-world problems — from AI-powered applications and full-stack systems to high-performance infrastructure for machine learning workloads.",

  education: [
    {
      school: "Western Governors University",
      degree: "B.S. in Computer Science",
      period: "Expected Dec 2026",
      notes: "",
    },
    {
      school: "University of Texas at El Paso",
      degree: "Coursework in Artificial Intelligence",
      period: "Aug 2024 – Dec 2025",
      notes: "Minors: Computer Information Systems & Business Analytics",
    },
    {
      school: "El Paso Community College",
      degree: "A.S. in Computer Science",
      period: "Aug 2022 – May 2024",
      notes: "GPA: 3.60",
    },
  ],

  experience: [
    {
      company: "Sorta",
      role: "Co-Founder & Lead Software Engineer",
      period: "Dec 2025 – Present",
      bullets: [
        "Designed and implemented core application logic for an AI-powered paperwork automation platform for outpatient specialist clinics.",
        "Built data-driven workflows to transform structured visit data into clinic-ready documentation, including dynamic form rendering and PDF generation.",
        "Implemented frontend systems using JavaScript/TypeScript for fast, reliable daily clinic usage.",
        "Architected modular pipelines to batch-generate multiple required documents from a single data entry flow.",
      ],
    },
    {
      company: "Davie & Valdez Law Office",
      role: "AI Engineering Intern",
      period: "Aug 2025 – Present",
      bullets: [
        "Helped design retrieval-augmented generation (RAG) pipelines for legal document analysis and summarization.",
        "Deployed Chroma and FAISS vector databases for fast semantic search over the firm's legal archives.",
        "Integrated Claude, ChatGPT, and Fireworks.AI APIs to automate document drafting and Q&A workflows.",
        "Collaborated with attorneys to align model outputs with real legal workflows and compliance constraints.",
      ],
    },
    {
      company: "HelixTech LLC",
      role: "Software Engineer Intern",
      period: "Aug 2024 – Dec 2025",
      bullets: [
        "Developed and maintained Swift and JavaScript applications automating internal workflows.",
        "Improved app load times by 25% through UI optimization and efficient state management.",
        "Implemented GitHub Actions workflows to streamline CI/CD pipelines.",
        "Contributed to documentation and testing practices for maintainable codebases.",
      ],
    },
  ],

  projects: [
    {
      name: "Sorta",
      subtitle: "AI Paperwork Automation Platform",
      tech: ["TypeScript", "Web Systems", "PDF Generation"],
      period: "Dec 2025 – Present",
      description:
        "AI paperwork engine for outpatient specialist clinics. Generates clinic-ready PDFs from visit, procedure, and imaging data. Sits on top of existing EHRs without disrupting established clinical workflows.",
      bullets: [
        "Built core software systems for AI paperwork engine targeting outpatient clinics.",
        "Implemented structured data pipelines to generate clinic-ready PDFs.",
        "Developed frontend workflows for rapid data entry, review, and batch document generation.",
      ],
    },
    {
      name: "LegalMind AI",
      subtitle: "RAG Systems & API Integration",
      tech: ["Python", "TypeScript", "FAISS", "LLM APIs"],
      period: "Sept 2025 – Present",
      description:
        "AI chatbot assisting front-desk legal staff with employment law questions. Built on a Python-based RAG pipeline using FAISS and LLM APIs, reducing manual document search time by ~40%.",
      bullets: [
        "Built an AI chatbot for front-desk legal staff employment law questions.",
        "Implemented a Python-based RAG pipeline using FAISS and LLM APIs.",
        "Reduced manual document search time by approximately 40%.",
      ],
    },
  ],

  skills: {
    Languages: ["Java", "Python", "Swift", "JavaScript", "TypeScript", "SQL"],
    "Frameworks & Libraries": [
      "SwiftUI",
      "Core Data",
      "Flask",
      "FastAPI",
      "React",
      "Pandas",
      "NumPy",
    ],
    "AI & Data": [
      "LangChain",
      "FAISS",
      "Chroma",
      "RAG Systems",
      "Claude API",
      "OpenAI API",
      "Fireworks.AI",
      "Tableau",
    ],
    Tools: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Linux",
      "Xcode",
      "VSCode",
      "IntelliJ",
    ],
  },

  interests: [
    "Backend APIs",
    "iOS Development",
    "RAG Systems",
    "Vector Databases",
    "Data Pipelines",
    "Human–AI Interaction",
  ],
} as const;
