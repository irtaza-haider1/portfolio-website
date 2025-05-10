import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ParticlesCanvas from "@/components/ParticlesCanvas";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HeroSection() {
  const [ref, isVisible] = useScrollReveal();
  const [typedElement, setTypedElement] = useState<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!typedElement) return;
    
    const typed = new Typed(typedElement, {
      strings: [
        "Building the Future of Mobile, One App at a Time.",
        "Crafting Seamless Mobile Experiences.",
        "Developing Cross-Platform Mobile Apps."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    return () => {
      typed.destroy();
    };
  }, [typedElement]);

  return (
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden">
      <ParticlesCanvas />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          ref={ref}
          className={`flex flex-col items-start max-w-4xl ${isVisible ? 'reveal active' : 'reveal'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading leading-tight">
            <span>Syed Irtaza Haider —</span><br />
            <span className="gradient-text">
              <span ref={(el) => setTypedElement(el)} />
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            React Native Developer | 1.5 Years Experience
          </h2>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 transition-opacity px-8"
              asChild
            >
              <a href="#projects">View Portfolio</a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline" 
              className="rounded-full border-2 border-neon-green text-neon-green hover:bg-neon-green/10 transition-colors px-8"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a 
          href="#about" 
          className="text-foreground opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
}
