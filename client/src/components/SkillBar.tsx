import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  delay?: number;
  isVisible: boolean;
}

export default function SkillBar({ 
  name, 
  percentage, 
  color,
  delay = 0,
  isVisible
}: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-background rounded-full h-2 overflow-hidden">
        <motion.div 
          className={cn("h-2 rounded-full bg-gradient-to-r", color)}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ 
            duration: 1, 
            delay: delay, 
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
}
