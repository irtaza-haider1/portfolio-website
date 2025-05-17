import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Senior React Native Developer",
    company: "Gitrex Technologies",
    period: "Current",
    description: "Leading mobile app development for enterprise clients, focusing on performance optimization and cross-platform compatibility.",
    achievements: [
      "Developed and launched 3 mission-critical apps for fitness,finance and healthcare sectors",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and established coding standards"
    ],
    color: "neon-purple",
    position: "right"
  },
  {
    id: 2,
    title: "React Native Developer",
    company: "Troon Technologies",
    period: "May 2024 – Sep 2024",
    description: "Worked on consumer-facing mobile applications with focus on UI/UX excellence and seamless user experience.",
    achievements: [
      "Integrated third-party APIs for payment processing and logistics",
      "Optimized app performance, reducing load time by 30%"
    ],
    color: "neon-blue",
    position: "left"
  },
  {
    id: 3,
    title: "Graphic Designer",
    company: "IEIS Consulting",
    period: "Jan 2024 – April 2024",
    description: "Created visually appealing and brand-consistent social media posts for various platforms",
    achievements: [
      "Created visually appealing and brand-consistent social media posts for various platforms,helping clients increase their online presence and engagement. Developed creative concepts and layouts for marketing campaigns, ensuring alignment with the overall brand strategy",
      "Designed professional logos and brand identity elements, translating client ideas into impactful visual representations."
    ],
    color: "neon-green",
    position: "right"
  },
  {
    id: 4,
    title: "Designer Intern",
    company: "Iqra Corporate Dept ",
    period: "2022 – 2023",
    description: "Gained foundational experience in Graphic Designing through hands-on projects and mentoring.",
    achievements: [
      "Developed and designed social media content for the corporate department, creating visually compelling posts that aligned with brand guidelines and targeted audience engagement.",
      "Crafted unique and professional logo designs that reflected the corporate identity, working closely with stakeholders to capture the essence of the brand in visual form.",
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
