import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-xl font-heading font-bold">
              <span className="text-neon-purple">S</span>
              <span className="text-neon-blue">I</span>
              <span className="text-neon-green">H</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">© {new Date().getFullYear()} Syed Irtaza Haider. All rights reserved.</p>
            <p className="text-muted-foreground/70 text-sm">
              Designed with <Heart className="inline-block h-4 w-4 text-neon-purple mx-1" /> and React Native expertise
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
