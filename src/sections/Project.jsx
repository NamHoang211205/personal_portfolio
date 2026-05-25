import { Github } from "lucide-react"
import { ArrowUpRight } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

const projects = [
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
    description: "Song recommendation engine using collaborative filtering and audio feature analysis. Built with Python, Flask, and Scikit-learn — users get personalized track suggestions based on their listening preferences and song characteristics.",
    image: "/projects/spotify-recommender.png",
    tags: ["Python", "Flask", "Pandas", "Scikit-learn"],
    link: "#",
    github: "#",
  },
  {
    title: "AI-Powered Chinese Learning SaaS",
    description: "SaaS language-learning platform using the OpenAI API to generate personalized Mandarin lessons, vocabulary drills, and grammar explanations — adapting content to each learner's progress and weak points.",
    image: "/projects/ai-chinese-learning.png",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
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
