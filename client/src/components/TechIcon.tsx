import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs, 
  SiGithub, 
  SiNpm 
} from "react-icons/si";
import { Database } from "lucide-react";
import { motion } from "framer-motion";

interface TechIconProps {
  icon: string;
  color: string;
  name: string;
  delay?: number;
  isVisible: boolean;
}

export default function TechIcon({ 
  icon, 
  color, 
  name,
  delay = 0,
  isVisible
}: TechIconProps) {
  const renderIcon = () => {
    switch (icon) {
      case "react":
        return <SiReact style={{ color }} size={30} />;
      case "js":
        return <SiJavascript style={{ color }} size={30} />;
      case "node":
        return <SiNodedotjs style={{ color }} size={30} />;
      case "github":
        return <SiGithub style={{ color }} size={30} />;
      case "npm":
        return <SiNpm style={{ color }} size={30} />;
      case "database":
        return <Database style={{ color }} size={30} />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="tech-icon w-16 h-16 flex items-center justify-center glass-effect bg-background/40 rounded-xl p-3 hover:border hover:border-neon-purple transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.5, delay: delay }}
      title={name}
    >
      {renderIcon()}
    </motion.div>
  );
}
