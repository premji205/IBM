import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
      <button
        onClick={scrollToAbout}
        className="glass-panel p-3 rounded-full hover:glow-cyan transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to About section"
      >
        <ChevronDown 
          size={24} 
          className="text-primary group-hover:text-glow transition-all duration-300" 
        />
      </button>
    </div>
  );
};