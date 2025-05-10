import { useScrollReveal } from "@/hooks/useScrollReveal";
import SkillBar from "@/components/SkillBar";
import TechIcon from "@/components/TechIcon";
import { Code, Database, Bolt } from "lucide-react";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "React Native", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "TypeScript", percentage: 75 },
  { name: "React.js", percentage: 80 },
];

const backendSkills = [
  { name: "Firebase", percentage: 85 },
  { name: "REST APIs", percentage: 80 },
  { name: "GraphQL", percentage: 70 },
  { name: "MongoDB", percentage: 65 },
];

const toolsSkills = [
  { name: "Git & GitHub", percentage: 85 },
  { name: "Redux", percentage: 80 },
  { name: "Jest/Testing", percentage: 75 },
  { name: "CI/CD", percentage: 65 },
];

const techIcons = [
  { icon: "react", color: "#61DAFB", name: "React" },
  { icon: "js", color: "#F7DF1E", name: "JavaScript" },
  { icon: "node", color: "#339933", name: "Node.js" },
  { icon: "github", color: "#ffffff", name: "GitHub" },
  { icon: "npm", color: "#CB3837", name: "NPM" },
  { icon: "database", color: "#F05033", name: "Databases" },
];

export default function SkillsSection() {
  const [titleRef, isTitleVisible] = useScrollReveal();
  const [skillsRef, areSkillsVisible] = useScrollReveal();
  const [iconsRef, areIconsVisible] = useScrollReveal();

  return (
    <section id="skills" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${isTitleVisible ? 'reveal active' : 'reveal'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Technical <span className="text-neon-green">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My tech stack and expertise in mobile application development.
          </p>
        </div>
        
        <div 
          ref={skillsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ${areSkillsVisible ? 'reveal active' : 'reveal'}`}
        >
          {/* Frontend Skills */}
          <div className="glass-effect bg-background/40 p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-6 text-neon-purple flex items-center">
              <Code className="mr-3 h-5 w-5" /> Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="from-neon-purple to-neon-blue"
                  delay={index * 0.1}
                  isVisible={areSkillsVisible}
                />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="glass-effect bg-background/40 p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-6 text-neon-blue flex items-center">
              <Database className="mr-3 h-5 w-5" /> Backend & Data
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="from-neon-blue to-neon-green"
                  delay={index * 0.1}
                  isVisible={areSkillsVisible}
                />
              ))}
            </div>
          </div>
          
          {/* Bolt Skills */}
          <div className="glass-effect bg-background/40 p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-6 text-neon-green flex items-center">
              <Bolt className="mr-3 h-5 w-5" /> Bolt & Workflow
            </h3>
            <div className="space-y-6">
              {toolsSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="from-neon-green to-neon-purple"
                  delay={index * 0.1}
                  isVisible={areSkillsVisible}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Tech Stack Logos */}
        <motion.div 
          ref={iconsRef}
          className={`mt-16 ${areIconsVisible ? 'reveal active' : 'reveal'}`}
        >
          <h3 className="text-xl font-bold mb-8 text-center font-heading">Technologies I Work With</h3>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {techIcons.map((tech, index) => (
              <TechIcon 
                key={tech.name}
                icon={tech.icon}
                color={tech.color}
                name={tech.name}
                delay={index * 0.1}
                isVisible={areIconsVisible}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
