import { Code2, Rocket, Users, Lightbulb } from "lucide-react";


const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Write clean, maintainable, and efficient code following best practices."
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description: "Optimized applications for speed and responsiveness."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life."
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Staying with the latest trends to deliver cutting-edge solutions."
  },
]

export const About = () => {
  return (
    <section id="about" className="py-3 relative overflow-hidden">
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
            <span className="font-serif italic font-normal text-white"> one component at a time.</span>
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
              "My mission is to create seamless digital experiences that empower users and drive innovation."
            </p>
          </div>
          </div>

          {/* Right column - highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
