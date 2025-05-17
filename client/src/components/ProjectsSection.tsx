import ProjectCard from "@/components/ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import sweatpalsImage from "../assets/sweatpals.png";
import apeakImage from "../assets/apeak.png";
import funkyfoodImage from "../assets/funkyfood.png";
import liferiseImage from "../assets/liferise.png";

const projects = [
  {
    id: 1,
    title: "SweatPals",
    description: "A full-stack platform for fitness events & communities that lets users create, manage, and monetize their fitness events.",
    image: sweatpalsImage,
    tags: ["React Native", "Node.js", "MongoDB"],
    github: "https://github.com/irtaza-haider1",
    demo: "https://www.sweatpals.com/",
    color: "neon-purple"
  },
  {
    id: 2,
    title: "Apeak Tennis",
    description: "A mental training app for tennis players providing on-court exercises, performance coaching, and personalized feedback.",
    image: apeakImage,
    tags: ["React Native", "TypeScript", "AI Integration"],
    github: "https://github.com/irtaza-haider1",
    demo: "https://www.apeak.com/",
    color: "neon-blue"
  },
  {
    id: 3,
    title: "Funky Food",
    description: "An e-commerce platform for rescued produce that helps reduce food waste by selling imperfect fruits and vegetables.",
    image: funkyfoodImage,
    tags: ["React Native", "E-commerce", "Payment Gateway"],
    github: "https://github.com/irtaza-haider1",
    demo: "https://funkyfood.com.au/",
    color: "neon-green"
  },
  {
    id: 4,
    title: "Liferise: Mystic Mindfulness",
    description: "A meditation and mindfulness app with guided sessions, neuroscience-based tools, and personalized horoscopes.",
    image: liferiseImage,
    tags: ["React Native", "Audio Integration", "State Management"],
    github: "https://github.com/irtaza-haider1",
    demo: "https://bnirvana.en.aptoide.com/app",
    color: "neon-purple"
  },
  {
    id: 5,
    title: "RoboRevenge",
    description: "A mobile app that blocks robocalls. So far, not a single robocaller has beat our filter. We currently only work in the USA. Pepper has been shut down.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    tags: ["React Native", "Twilio Api", "State Management"],
    github: "#",
    demo: "https://callpepper.co/#/",
    color: "neon-blue"
  },
  {
    id: 6,
    title: "EduSmart",
    description: "An interactive e-learning platform with video courses, progress tracking, and practice exercises.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    tags: ["React Native", "AWS Amplify", "Reanimated"],
    github: "#",
    demo: "#",
    color: "neon-green"
  }
];

export default function ProjectsSection() {
  const [titleRef, isTitleVisible] = useScrollReveal();
  
  return (
    <section id="projects" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${isTitleVisible ? 'reveal active' : 'reveal'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work building innovative mobile applications with React Native.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
