import { useState, useRef, useEffect } from "react";
import { GitPullRequest, ExternalLinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMobile } from "@/hooks/use-mobile";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
    color: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectProps) {
  const [ref, isVisible] = useScrollReveal();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isMobile = useMobile();

  // Enable 3D card effect on non-mobile devices
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = (x - centerX) / 20;
    const rotateX = (centerY - y) / 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const colorClass = {
    "neon-purple": "hover:border-neon-purple",
    "neon-blue": "hover:border-neon-blue",
    "neon-green": "hover:border-neon-green"
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "project-card h-full", 
        isVisible ? 'reveal active' : 'reveal'
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        className={cn(
          "project-card-inner h-full glass-effect rounded-xl overflow-hidden border border-border transition-all duration-300 transform hover:-translate-y-2",
          colorClass[project.color as keyof typeof colorClass]
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-2 text-${project.color}`}>{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-background px-3 py-1 rounded-full text-xs font-medium">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href={project.github}
              className="text-neon-blue hover:text-neon-purple transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitPullRequest className="h-5 w-5" />
            </a>
            <a
              href={project.demo}
              className="text-neon-green hover:text-neon-purple transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLinkIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
