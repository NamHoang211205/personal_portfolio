const experiences = [
  // put latest experience first (need to re-arrange the order)
  {
    period: "Jan 2026 - Present",
    role: "Game UI/UX Developer Intern",
    company: "Agents Of Influence - Alterea.Inc",
    description: "Designed user interfaces for web applications using Adobe XD and Figma. Conducted user research to gather insights on user experience and behavior. Created prototypes of web pages and applications with HTML, CSS, JavaScript. Collaborated with developers to ensure seamless integration of UI elements.",
    technologies: ["JavaScript", "HTML", "CSS"],
    current: true,
  },
  {
    period: "Jan 2026 - Present",
    role: "ID Card Assistant",
    company: "Oberlin College",
    description: "Assisted users with ID card issuance and access issues, following structured procedures to ensure accurate identity verification and campus security. Worked with digital ID systems and user records, maintaining data accuracy, confidentiality, and system reliability. Explained how ID cards function as authentication and access-control tools, helping users understand and use campus systems effectively. Supported daily operations of a campus-wide access system, troubleshooting common issues and escalating technical problems when needed.",
    current: true,
  },
  {
    period: "June 2025 - Aug 2025",
    role: "Software Engineering Intern",
    company: "Luca Studio",
    description: "Developed responsive front-end dashboard for subscribers' management with application. Collaborated with back-end team to integrate APIs, validate real-time data, and ensure smooth flow of subscriber information. Translated Figma prototypes into user-friendly interfaces, improving accessibility for non-technical staff.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    current: true,
  },
  {
    period: "June 2025 - Aug 2025",
    role: "Front-End Developer Intern",
    company: "Lotte Innovate Vietname - Lotte Group",
    description: "Built and maintained front-end components for Lotte Portal, ensuring a seamless and responsive user experience. Collaborated with design team to adapt Figma mockups intoproduction-ready web pages consistent with Lotte's branding. Worked closely with back-end engineers to integrate APIs, handle data validation, and ensure smooth functionality. Optimized portal performance across devices and browsers by debugging and refining code structure. Contributed to code reviews, version control, and best practices to maintain scalability and consistency.",
    technologies: ["Vue.js", "Node.js", "JavaScript", "HTML", "CSS"],
    current: true,
  },
  {
    period: "June 2024 - Aug 2024",
    role: "Software Developer Intern",
    company: "Luca Studio",
    description: "Worked in agile development, contributing to flexible software design approaches. Supported the migration of legacy systems to modern platforms for increased eﬃciency and security. Built responsive web designs using HTML, CSS, JavaScript and Vue frameworks leading to an improved user experience across devices. Collaborated with cross-functional teams to optimize software development processes. Partnered with team members to learn best practices in software design. ",
    technologies: ["Vue.js", "JavaScript", "HTML", "CSS"],
    current: true,
  }
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
            A timeline of my professional growth, from curious beginner to
            software development intern collaborating teams and building products at scale.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={idx} 
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms`}}
              >

                {/* Timeline Dot */}
                <div></div>

                {/* Content */}
                <div 
                  className={`pl-8 md:pl-0 ${
                    idx % 2 == 0 
                      ? "md:pr-16 md:text-right" 
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                    <span>{exp.period}</span>
                    <h3>{exp.role}</h3>
                    <p>{exp.company}</p>
                    <p>{exp.description}</p>
                    <div>
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx}>{tech}</span>
                      ))}
                    </div>
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
