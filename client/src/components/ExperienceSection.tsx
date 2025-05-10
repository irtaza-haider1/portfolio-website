import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Senior React Native Developer",
    company: "MobileTech Solutions",
    period: "Current",
    description: "Leading mobile app development for enterprise clients, focusing on performance optimization and cross-platform compatibility.",
    achievements: [
      "Developed and launched 3 mission-critical apps for finance and healthcare sectors",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and established coding standards"
    ],
    color: "neon-purple",
    position: "right"
  },
  {
    id: 2,
    title: "React Native Developer",
    company: "AppInnovate Studios",
    period: "2022-2023",
    description: "Worked on consumer-facing mobile applications with focus on UI/UX excellence and seamless user experience.",
    achievements: [
      "Built an e-commerce app that achieved 100k+ downloads in first quarter",
      "Integrated third-party APIs for payment processing and logistics",
      "Optimized app performance, reducing load time by 30%"
    ],
    color: "neon-blue",
    position: "left"
  },
  {
    id: 3,
    title: "Junior Mobile Developer",
    company: "TechStart Innovations",
    period: "2021-2022",
    description: "Started my career developing features for established mobile applications and learning best practices.",
    achievements: [
      "Contributed to 2 major app releases for startup clients",
      "Developed reusable component library for internal projects",
      "Implemented user authentication and data persistence features"
    ],
    color: "neon-green",
    position: "right"
  },
  {
    id: 4,
    title: "Mobile Development Intern",
    company: "CodeCamp Academy",
    period: "2021",
    description: "Gained foundational experience in mobile development through hands-on projects and mentoring.",
    achievements: [
      "Built a personal finance tracking app as capstone project",
      "Learned React Native fundamentals and mobile app architecture",
      "Collaborated with design team on UI/UX implementation"
    ],
    color: "neon-purple",
    position: "left"
  }
];

export default function ExperienceSection() {
  const [titleRef, isTitleVisible] = useScrollReveal();

  return (
    <section id="experience" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${isTitleVisible ? 'reveal active' : 'reveal'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Professional <span className="text-neon-purple">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in the world of mobile application development.
          </p>
        </div>
        
        <div className="relative vertical-timeline pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
          {experiences.map((exp, index) => {
            const [expRef, isExpVisible] = useScrollReveal();
            
            return (
              <div 
                key={exp.id} 
                className={`mb-12 md:mb-0 ${isExpVisible ? 'reveal active' : 'reveal'}`}
                ref={expRef}
              >
                <div className={`md:flex md:items-center ${exp.position === 'right' ? 'md:justify-end md:pr-10' : 'md:pl-10'} relative`}>
                  {/* Timeline dot and line */}
                  <div className={`hidden md:block absolute ${exp.position === 'right' ? 'right-0' : 'left-0'} w-3 h-3 rounded-full bg-${exp.color}`}></div>
                  <div 
                    className={`hidden md:block w-10 h-[2px] absolute ${
                      exp.position === 'right' 
                        ? 'right-3 bg-gradient-to-r from-transparent to-' + exp.color 
                        : 'left-3 bg-gradient-to-r from-' + exp.color + ' to-transparent'
                    }`}
                  ></div>
                  
                  <motion.div 
                    className={`md:max-w-md glass-effect bg-muted/40 backdrop-blur-md p-6 rounded-xl border border-border hover:border-${exp.color} transition-all duration-300`}
                    initial={{ opacity: 0, x: exp.position === 'right' ? 50 : -50 }}
                    animate={{ 
                      opacity: isExpVisible ? 1 : 0, 
                      x: isExpVisible ? 0 : exp.position === 'right' ? 50 : -50 
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold text-${exp.color}`}>{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className={`bg-background px-3 py-1 rounded-full text-xs font-medium text-${exp.color}`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
