import { Github } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const projects = [
  {
    title: "AI-Powered Tarot Reading Platform",
    description: "Full-stack Next.js 16 + TypeScript app delivering interactive tarot readings across three spread formats, backed by a 78-card PostgreSQL database. Prompt-grounded Claude API workflows stream real-time interpretations constrained to stored card meanings, with 3D card-flip interactions, an animated SVG zodiac wheel, and Auth.js authentication enforcing per-user data isolation.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Claude API", "Auth.js"],
    link: "/projects/Tarotweb.png",
    github: "https://github.com/NamHoang211205/tarotweb",
  },
  {
    title: "GuardianHelm – Edge AI Fall Detection",
    description: "Edge-AI fall detection and emergency-assistance system for motorcyclists using a helmet-mounted camera and microphone. A two-branch model fuses audio features (MFCC, spectral centroid, RMS, ZCR) with R3D-18 video embeddings, deployed on-device to a Qualcomm QCS8550 via Qualcomm AI Hub.",
    tags: ["Python", "PyTorch", "Scikit-learn", "Qualcomm AI Hub", "QNN"],
    link: "#",
    github: "https://github.com/NamHoang211205/GuardianHelm",
  },
  {
    title: "Discord-Based RAG Teaching Assistant",
    description: "Discord-native RAG system delivering real-time, course-aware Q&A. LangChain + Ollama workflows ground LLM answers in uploaded course documents, with a React + TypeScript dashboard for document upload, preview, ingestion tracking, and knowledge base management.",
    tags: ["Python", "LangChain", "Ollama", "React", "TypeScript"],
    link: "#",
    github: "https://github.com/WCU-AIR/tm_discord_rag",
  },
  {
    title: "Vietnamese Card Games",
    description: "Real-time multiplayer platform for traditional Vietnamese card games. Engineered WebSocket-based game state synchronization with Socket.io, supporting concurrent players with a Node.js/Express backend and MongoDB for persistent sessions.",
    image: "/projects/vietnamese-card-games.png",
    tags: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Spotify Songs Recommender",
    description: "Song recommendation web app built on the Spotify Web API with personalized recommendations based on user behavior. Led the front-end: a responsive Vue.js + Tailwind UI with real-time search, preference-based filtering, and interactive charts of listening patterns.",
    image: "/projects/spotify-recommender.png",
    tags: ["Vue.js", "Tailwind CSS", "Spotify Web API"],
    link: "#",
    github: "#",
  },
  {
    title: "AI-Powered Chinese Learning SaaS",
    description: "Chinese learning SaaS platform with a scalable Next.js App Router front-end built on reusable components. Architected for upcoming backend services — user accounts, progress tracking, content management — and an AI tutor with adaptive feedback and personalized lesson recommendations.",
    image: "/projects/ai-chinese-learning.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    link: "#",
    github: "#",
  },
  {
    title: "Users Dashboard",
    description: "Full-stack analytics dashboard for managing user data and behavior insights. Features filterable tables, role-based access, and real-time data sync via a Django REST API backed by PostgreSQL.",
    image: "/projects/users-dashboard.png",
    tags: ["Vue.js", "Django", "PostgreSQL"],
    link: "#",
    github: "#",
  },
]
export const Project = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Future Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that
            <span className="font-serif italic font-normal text-white">
              {" "} strive to
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-100">
            A selection of my recent work, from complex web applications to AI-powered platforms.
            Each project reflects my commitment to building solutions that are not only functional but also user-centric and innovative.
          </p>
        </div>

        {/* projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >

              <div className="relative overflow-hidden aspect-video">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-primary/30 via-surface to-highlight/20 transition-transform duration-700 group-hover:scale-110">
                    <span className="text-2xl md:text-3xl font-serif italic text-white/80 text-center">
                      {project.title}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground 
                        group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border
                   border-border/50 color-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}
