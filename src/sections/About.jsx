import { Zap, Globe, Bot, Layers } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Real-Time Systems",
    description: "Built multiplayer WebSocket infrastructure with Socket.io — hands-on distributed state management handling concurrent users from scratch.",
  },
  {
    icon: Globe,
    title: "International Experience",
    description: "Shipped production features at 3 companies across the US and Vietnam — Luca Studio, Lotte Group, and Alterea Inc.",
  },
  {
    icon: Bot,
    title: "AI & Research",
    description: "Built a Discord RAG teaching assistant using LangChain and Ollama, grounding LLM responses in course documents for university students.",
  },
  {
    icon: Layers,
    title: "Design to Code",
    description: "Converted Figma designs to pixel-perfect, responsive UIs across multiple internships — bridging design and engineering at production scale.",
  },
]

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building the future,
            <span className="font-serif italic font-normal text-white"> 
              {" "}
              one component at a time.</span>
          </h2>

          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
              I'm a third-year student with a strong interest in full-stack web development, currently focused on strengthening my back-end and AI foundations.
            </p>
            <p>
              I build with JavaScript, React, and Node.js, and I enjoy creating reliable applications that connect clean interfaces with well-structured APIs.
            </p>
            <p>
              I'm curious by nature and motivated by teamwork, so I'm always looking for opportunities to learn how larger systems work end to end and to contribute to products that help real users.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              "My mission is to create seamless digital experiences that are not just functional, 
              but truly delightful - products that users love to use and developers love to maintain."
            </p>
          </div>
          </div>

          {/* Right column - highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in animation-delay-300"
                style={{animationDelay: `${(idx + 1) * 100}ms`}}
                >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
