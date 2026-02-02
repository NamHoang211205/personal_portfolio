
const projects = [
  {
    title:"Vietnamese Card Games",
    description: "Online platform to play traditional Vietnamese Card Games",
    image: "/projects/vietnamese-card-games.png",
    tags: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    link:"#",
    github:"#",
  },
  {
    title:"Spotify Songs Recommender – Song recommendation engine",
    description: "A song recommendation engine that suggests songs based on user preferences using collaborative filtering and content-based filtering techniques.",
    image: "/projects/spotify-recommender.png",
    tags: ["Python", "Flask", "Pandas", "Scikit-learn"],
    link:"#",
    github:"#",
  },
  {
    title:"AI-Powered Chinese Learning SaaS Platform",
    description: "A SaaS platform that leverages AI to help users learn Chinese more effectively through personalized lessons and interactive exercises.",
    image: "/projects/ai-chinese-learning.png",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    link:"#",
    github:"#",
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
            <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
  )
}
