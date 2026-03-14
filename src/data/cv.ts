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
      notes:
        "Focusing on computer science theory, algorithms, data structures, software engineering principles, and systems design. I chose WGU's competency-based model specifically because it rewards demonstrated knowledge over seat time — I can accelerate through domains I already know and invest real time in the areas I want to master. Relevant coursework includes Data Structures & Algorithms, Discrete Mathematics, Database Management, Operating Systems, and Software Engineering.",
    },
    {
      school: "University of Texas at El Paso",
      degree: "Coursework in Artificial Intelligence",
      period: "Aug 2024 – Dec 2025",
      notes:
        "Minors: Computer Information Systems & Business Analytics\n\nCompleted advanced AI and ML coursework — Machine Learning, Natural Language Processing, and Intelligent Systems — while earning two minors. The Computer Information Systems minor grounded me in enterprise-level data architecture, and Business Analytics gave me a data-driven business lens that directly shapes how I scope and prioritize engineering decisions.\n\nI left UTEP after realizing the timeline wasn't working in my favor. With no summer classes available and required coursework that had no relevance to the career I was already building, my projected graduation date was pushed to Fall 2028. Four more years for a degree in a field where I was already building and shipping production software made no sense. I transferred to WGU and set my own graduation date — Fall 2026.",
    },
    {
      school: "El Paso Community College",
      degree: "A.S. in Computer Science",
      period: "Aug 2022 – May 2024",
      notes:
        "GPA: 3.60 — Built a rigorous foundation in Java, Python, C++, discrete mathematics, data structures, and algorithms. These two years instilled the problem-solving discipline and low-level understanding of computation that underlies everything I build today. Completing an associate's degree before transferring gave me a cost-effective on-ramp into CS fundamentals while maintaining a strong academic record.",
    },
  ],

  experience: [
    {
      company: "Sorta",
      role: "Co-Founder & Lead Software Engineer",
      period: "Dec 2025 – Present",
      context:
        "I co-founded Sorta after spending time inside outpatient specialty clinics and seeing firsthand how much qualified staff time was consumed by manual paperwork — work that should have been automated years ago. As Co-Founder and Lead Engineer I own the entire technical stack, from database schema and API architecture to the frontend workflows that clinical staff use every day. Every decision I make is rooted in real conversations with doctors and administrators who need software that just works, without disrupting existing clinical processes.",
      tech: ["TypeScript", "React", "Python", "FastAPI", "PDF Generation", "PostgreSQL"],
      highlight: "Targeting a 60%+ reduction in per-patient paperwork time in pilot clinics.",
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
      context:
        "Legal practices are document-heavy environments where the ability to rapidly retrieve, analyze, and synthesize information directly affects case outcomes. I joined this practice to apply AI engineering in a high-stakes domain where accuracy is non-negotiable. The work forced me to go beyond prototype-quality RAG systems and build pipelines that attorneys could actually trust — with grounded citations, semantic chunking strategies, and evaluation loops to catch hallucinations before they reached a court document.",
      tech: ["Python", "FAISS", "Chroma", "LangChain", "Claude API", "OpenAI API", "Fireworks.AI"],
      highlight: "Reduced manual document search time by ~40% using semantic retrieval over the firm's full archive.",
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
      context:
        "I took this internship to build structured professional engineering habits that go beyond personal projects — writing code that other engineers depend on, maintaining CI/CD pipelines, and shipping production features on a deadline. Working on Swift and JavaScript tools for internal automation gave me a clear appreciation for the gap between 'it works on my machine' and 'it reliably runs in production every day'. The 25% load time improvement I shipped came directly from profiling the app's render cycles and aggressively minimizing state re-computation.",
      tech: ["Swift", "SwiftUI", "JavaScript", "GitHub Actions", "Xcode"],
      highlight: "Improved app load times by 25% through targeted UI optimization and state management refactoring.",
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
      name: "Caravan",
      subtitle: "iOS Car Companion App",
      tech: ["Swift", "SwiftUI", "Core Data", "Google Maps SDK"],
      period: "Aug 2024 – Dec 2024",
      github: "https://github.com/dorianacosta/Caravan",
      description:
        "iOS application for tracking cars, routes, and road trips. Built with SwiftUI and Core Data with animated splash and auto-login flow. Integrates Google Maps SDK for live route tracking and persistent trip management.",
      why: "I built Caravan to solve a real problem — keeping track of multiple vehicles, trip histories, and routinely visited routes. It was also my first serious SwiftUI project, and I intentionally chose a domain complex enough to force me to learn Core Data relationships, SDK integration, and iOS app lifecycle properly.",
      learned: "Learned how to architect a Core Data model with multiple related entities, integrate external SDKs cleanly into SwiftUI, and the outsized impact of startup UX — the animated flicker splash was the most technically interesting thing I'd built in Swift at the time.",
      bullets: [
        "Custom animated splash screen with letter-by-letter flicker using BitcountGrid font.",
        "Google Maps SDK integration for real-time route tracking and navigation.",
        "Core Data persistence layer managing Cars, Routes, Trips, and User entities.",
        "Auto-login via UserDefaults email lookup on each app launch.",
      ],
    },
    {
      name: "Sorta",
      subtitle: "AI Paperwork Automation Platform",
      tech: ["TypeScript", "React", "Python", "FastAPI", "PDF Generation"],
      period: "Dec 2025 – Present",
      description:
        "AI paperwork engine for outpatient specialist clinics. Generates clinic-ready PDFs from visit, procedure, and imaging data. Sits on top of existing EHRs without disrupting established clinical workflows.",
      why: "Outpatient clinics spend disproportionate staff time on documentation — writing the same forms from structured data that already exists. Sorta eliminates that redundancy by auto-generating clinic-ready documents from a single data entry flow, giving clinical staff time back to focus on patients.",
      learned: "Sorta pushed me to think about software in terms of clinical workflows, not just technical requirements. The hardest part wasn't the code — it was understanding why certain fields appear on certain forms and why batch generation matters more than one-at-a-time output.",
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
      github: "https://github.com/dorianacosta/DV-AI-work-chat",
      description:
        "AI chatbot assisting front-desk legal staff with employment law questions. Built on a Python-based RAG pipeline using FAISS and LLM APIs, reducing manual document search time by ~40%.",
      why: "Front-desk legal staff need to answer employment law questions accurately and quickly, but manually searching hundreds of legal documents takes time and introduces inconsistency. I built LegalMind AI to give staff instant, citation-grounded answers over the firm's entire document archive — turning a static library into a conversational knowledge base.",
      learned: "This project forced me to take RAG seriously beyond the tutorial level. Chunking strategy, embedding model choice, retrieval reranking, and temperature tuning have compounding effects on output quality. Involving attorneys directly surfaced edge cases I never would have caught from a purely technical perspective.",
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
