const experiences = [
  {
    period: "Aug 2026",
    role: "Team Lead – Edge AI Fall Detection (GuardianHelm)",
    company: "SoICT Summer School 2026 – Sponsored by Qualcomm",
    description: "Led a 7-person team building GuardianHelm, an edge-AI fall detection and emergency-assistance system for motorcyclists using a helmet-mounted camera and microphone. Designed a two-branch hybrid model: an audio pipeline (MFCC, spectral centroid, RMS, ZCR → RandomForest) and a video pipeline (R3D-18 pretrained on Kinetics-400 → RandomForest), trained on the EGOFALLS dataset. Deployed on-device to a Qualcomm QCS8550 via Qualcomm AI Hub (QNN runtime, Hexagon NPU) as a systemd service with an HTTP health-check endpoint.",
    technologies: ["Python", "PyTorch", "Scikit-learn", "Qualcomm AI Hub", "QNN", "Edge AI"],
    current: false,
  },
  {
    period: "Jun 2026 – Aug 2026",
    role: "Data Analysis Intern",
    company: "VNDirect – VNDIRECT Securities Joint Stock Company",
    description: "Analyzed Vietnamese stock market data across HoSE, HNX, and UPCOM using the Market360 system (250 indicators across 6 analysis profiles) to support the weekly \"La Bàn Đầu Tư\" and daily \"La Bàn Thị Trường\" reports. Built an AI-assisted content generation pipeline on Microsoft Fabric, integrating a Fabric Data Agent via the OpenAI Assistants API to automate financial commentary drafting. Refactored it into a reusable base notebook with token authentication fallback, retry logic, and a generic validation engine.",
    technologies: ["Python", "PySpark", "Delta Lake", "Microsoft Fabric", "OpenAI API", "SQL"],
    current: false,
  },
  {
    period: "Jan 2026 – Jul 2026",
    role: "Research Assistant – Discord-Based RAG Teaching Assistant",
    company: "West Chester University of Pennsylvania",
    description: "Built a Discord-native RAG system that delivered real-time, course-aware Q&A through a Discord bot and retrieval pipeline. Designed prompt-driven workflows that grounded LLM responses in uploaded course documents. Developed a dashboard for document upload, preview, ingestion tracking, and knowledge base management.",
    technologies: ["Python", "React", "TypeScript", "LangChain", "Ollama", "Docker"],
    current: false,
  },
  {
    period: "Jan 2026 – May 2026",
    role: "ID Card Assistant",
    company: "Oberlin College",
    description: "Assisted with ID card issuance and access troubleshooting, following structured procedures for accurate identity verification and campus security. Maintained data accuracy and confidentiality across digital ID systems and user records. Supported daily operations of a campus-wide access control system.",
    technologies: [],
    current: true,
  },
  {
    period: "Jan 2026 – May 2026",
    role: "Game UI/UX Developer Intern",
    company: "Agents of Influence – Alterea Inc.",
    description: "Designed user interfaces for web applications using Adobe XD and Figma. Conducted user research to gather insights on user experience and behavior. Created prototypes of web pages and applications with HTML, CSS, and JavaScript. Collaborated with developers to ensure seamless integration of UI elements.",
    technologies: ["JavaScript", "HTML", "CSS"],
    current: false,
  },
  {
    period: "Sep 2025 – Present",
    role: "Treasurer & Co-President",
    company: "Oberlin College Vietnamese Student Association",
    description: "Manage the club's finances as treasurer and share leadership of the organization's direction as co-president. Help coordinate programs including cultural events and social activities for the Oberlin community.",
    technologies: [],
    current: true,
  },
  {
    period: "May 2025 – Aug 2025",
    role: "Front-End Developer Intern",
    company: "Lotte Innovate Vietnam – Lotte Group",
    description: "Built and maintained front-end components for Lotte Portal, ensuring a seamless and responsive user experience. Adapted Figma mockups into production-ready pages consistent with Lotte's branding. Worked with back-end engineers to integrate APIs and handle data validation. Optimized portal performance across devices and browsers.",
    technologies: ["Vue.js", "Node.js", "JavaScript", "HTML", "CSS"],
    current: false,
  },
  {
    period: "Jun 2024 – Aug 2024",
    role: "Software Developer Intern",
    company: "Luca Studio",
    description: "Worked in agile development cycles, contributing to flexible software design. Supported migration of legacy systems to modern platforms for improved efficiency and security. Built responsive web designs using HTML, CSS, JavaScript, and Vue.js, improving user experience across devices.",
    technologies: ["Vue.js", "JavaScript", "HTML", "CSS"],
    current: false,
  },
  {
    period: "Aug 2023 – May 2027",
    role: "Undergraduate Student",
    company: "Oberlin College",
    description: "Pursuing a degree with a focus on Computer Science, full-stack development, and AI. Active in research, campus technology support, and multiple internships across the US and Vietnam.",
    technologies: [],
    current: true,
  },
]


export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth — from front-end internships to
            data pipelines, RAG systems, and on-device AI.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms`}}
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>
                  )}
                </div>

                {/* Content */}
                <div 
                  className={`pl-8 md:pl-0 ${
                    idx % 2 == 0 
                      ? "md:pr-16 md:text-right" 
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                    {!!exp.technologies?.length && (
                      <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end": ""}`}>
                        {exp.technologies.map((tech, techIdx) => (
                          <span 
                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground " 
                            key={techIdx}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    </section>
  );
}
