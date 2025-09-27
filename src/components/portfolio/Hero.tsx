import { Mail, Linkedin, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming you use shadcn/ui

// Make sure to place your profile image at this path in your project:
// src/assets/profile.png
import profileImage from '@/components/profile.jpg'; 

export const Hero = () => {
  // Function to scroll to the 'projects' section
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the 'contact' section
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto relative">
        
        {/* These floating elements need the 'glass-panel' and 'float' animation classes from your CSS */}
        <div className="absolute -top-20 -left-20 w-40 h-40 glass-panel rounded-full float opacity-30" />
        <div className="absolute -bottom-20 -right-20 w-32 h-32 glass-panel rounded-full float-delayed opacity-20" />
        
        <div className="relative z-10">

          {/* Profile Image Section */}
          <div className="mb-6 animate-fade-in">
            <img
              src={profileImage}
              alt="Prem Kumar R"
              className="w-80 h-80 rounded-full object-cover border-4 border-primary/30 shadow-lg shadow-primary/40 mx-auto"
            />
          </div>

          {/* Greeting & Name */}
          <div className="mb-8">
            <p className="text-lg text-muted-foreground mb-2 animate-fade-in delay-100">Hello, I'm</p>
            {/* The 'font-orbitron' and 'text-glow' classes must be defined in your CSS/Tailwind config */}
            <h1 className="font-orbitron font-black text-6xl md:text-8xl mb-4 text-neon text-glow animate-scale-in delay-200">
              Prem Kumar R
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light animate-fade-in delay-400">
              Computer Science Engineering Student | Aspiring Innovator
            </p>
          </div>

          {/* Description Panel */}
          <div className="glass-panel p-8 mb-8 animate-fade-in delay-600">
            <p className="text-lg leading-relaxed text-foreground/90 max-w-2xl mx-auto">
              Motivated and detail-oriented Computer Science Engineering student with strong programming 
              and problem-solving skills. Passionate about leveraging technical knowledge to develop 
              practical solutions that make a difference.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-800">
            <Button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-primary/20 hover:bg-primary/30 border-2 border-primary/50 hover:border-primary text-primary hover:text-primary-foreground font-orbitron font-semibold text-lg rounded-xl transition-all duration-300 hover:glow-cyan hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="px-8 py-4 border-2 border-white/20 hover:border-primary/50 text-foreground hover:text-primary font-orbitron font-medium text-lg rounded-xl glass-panel hover:glow-purple hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Quick Contact Icons */}
          <div className="flex justify-center gap-6 animate-fade-in delay-1000">
            <a
              href="mailto:premkumar2k24@gmail.com"
              className="group p-4 glass-panel rounded-full hover:glow-cyan transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <Mail size={24} className="text-primary group-hover:text-glow" />
            </a>
            <a
              href="https://linkedin.com/in/prem-kumar-r-b0927b291"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 glass-panel rounded-full hover:glow-purple transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin size={24} className="text-secondary group-hover:text-glow" />
            </a>
            <a
              href="tel:+919445432488"
              className="group p-4 glass-panel rounded-full hover:glow-pink transition-all duration-300 hover:scale-110"
              title="Phone"
            >
              <Phone size={24} className="text-accent group-hover:text-glow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};