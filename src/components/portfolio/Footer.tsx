import { Heart, Code, Coffee } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="glass-panel p-8 rounded-xl text-center hover:glow-cyan transition-all duration-300">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-muted-foreground">Made with</span>
            <Heart size={16} className="text-accent animate-pulse" />
            <span className="text-muted-foreground">and</span>
            <Coffee size={16} className="text-primary" />
            <span className="text-muted-foreground">by</span>
            <Code size={16} className="text-secondary" />
          </div>
          
          <h3 className="font-orbitron font-bold text-xl text-neon mb-2">
            Prem Kumar R
          </h3>
          
          <p className="text-muted-foreground mb-4">
            Computer Science Engineering Student | Aspiring Innovator
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>© {currentYear} All rights reserved</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Built with React & TypeScript</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-50" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};