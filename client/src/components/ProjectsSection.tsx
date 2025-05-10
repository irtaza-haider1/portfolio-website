import ProjectCard from "@/components/ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import sweatpalsImage from "../assets/sweatpals.png";

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
    title: "FoodExpress",
    description: "An on-demand food delivery platform with real-time order tracking, payment integration, and restaurant discovery.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    tags: ["React Native", "GraphQL", "TypeScript"],
    github: "#",
    demo: "#",
    color: "neon-blue"
  },
  {
    id: 3,
    title: "ChatConnect",
    description: "A real-time messaging platform with end-to-end encryption, multimedia support, and group chat capabilities.",
    image: "https://images.unsplash.com/photo-1611746869696-d09bce200020?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    tags: ["React Native", "Socket.io", "MongoDB"],
    github: "#",
    demo: "#",
    color: "neon-green"
  },
  {
    id: 4,
    title: "TravelBuddy",
    description: "An all-in-one travel companion app with itinerary planning, booking services, and local recommendations.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    tags: ["React Native", "Redux Toolkit", "Stripe API"],
    github: "#",
    demo: "#",
    color: "neon-purple"
  },
  {
    id: 5,
    title: "FinFlow",
    description: "A personal finance management app with expense tracking, budget planning, and financial insights.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    tags: ["React Native", "Context API", "D3.js"],
    github: "#",
    demo: "#",
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
