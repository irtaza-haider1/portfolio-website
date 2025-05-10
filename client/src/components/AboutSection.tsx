import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import profileImage from "../assets/profile.png";

export default function AboutSection() {
  const [leftRef, isLeftVisible] = useScrollReveal();
  const [rightRef, isRightVisible] = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-28 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            ref={leftRef}
            className={`w-full md:w-1/2 ${isLeftVisible ? 'reveal active' : 'reveal'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              <span className="text-neon-purple">About</span> Me
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Hello! I'm Syed Irtaza Haider, a passionate React Native Developer with 1.5 years of hands-on experience in building scalable, user-friendly mobile applications that deliver exceptional user experiences.
            </p>
            
            <p className="text-muted-foreground mb-6">
              My journey in mobile development is driven by a passion for creating intuitive interfaces that solve real-world problems. I specialize in React Native, leveraging its cross-platform capabilities to deliver high-performance applications for both iOS and Android.
            </p>
            
            <p className="text-muted-foreground mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or brainstorming innovative mobile solutions.
            </p>
            
            <Button 
              variant="outline"
              className="inline-flex items-center rounded-full bg-background border border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </motion.div>
          
          <motion.div 
            ref={rightRef}
            className={`w-full md:w-2/5 flex justify-center ${isRightVisible ? 'reveal active' : 'reveal'}`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img 
                src={profileImage} 
                alt="Syed Irtaza Haider" 
                className="w-full h-full object-cover rounded-full border-4 border-neon-purple p-1"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green rounded-full blur opacity-30 animate-pulse-slow -z-10"></div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-background flex items-center justify-center shadow-lg border border-neon-green"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <span className="text-neon-green font-heading font-bold">1.5+</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
