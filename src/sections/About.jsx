import { Cpu, Globe, Bot, Database } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Edge AI",
    description: "Led a 7-person team at the Qualcomm-sponsored SoICT Summer School to deploy an audio + video fall-detection model on a Qualcomm QCS8550 NPU.",
  },
  {
    icon: Database,
    title: "Data & AI Pipelines",
    description: "Built an AI-assisted financial commentary pipeline on Microsoft Fabric (PySpark, Delta Lake) for VNDirect's daily and weekly market reports.",
  },
  {
    icon: Bot,
    title: "AI & Research",
    description: "Built a Discord RAG teaching assistant using LangChain and Ollama, grounding LLM responses in course documents for university students.",
  },
  {
    icon: Globe,
    title: "International Experience",
    description: "Shipped work at 4 companies across the US and Vietnam — VNDirect, Alterea Inc., Lotte Group, and Luca Studio.",
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
            From interfaces
            <span className="font-serif italic font-normal text-white">
              {" "}
              to intelligence.</span>
          </h2>

          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
              I'm a senior Computer Science student at Oberlin College (graduating May 2027). I started out building front-ends with React and Vue, and I've since grown toward the systems behind them — data, machine learning, and AI.
            </p>
            <p>
              This year I built an AI-assisted reporting pipeline on Microsoft Fabric at VNDirect, led a team deploying a fall-detection model on a Qualcomm edge device, and built a RAG teaching assistant with LangChain.
            </p>
            <p>
              I'm most excited by work that takes AI out of the notebook and into real products — whether that runs in the cloud, in a browser, or on a device in someone's hands.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              "My mission is to build intelligent systems that are reliable, useful,
              and genuinely helpful to the people who use them."
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
