import { useEffect, useState } from 'react';
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';
import { FloatingParticles } from '@/components/portfolio/FloatingParticles';
import { ScrollIndicator } from '@/components/portfolio/ScrollIndicator';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingParticles />
      <Header activeSection={activeSection} />
      <ScrollIndicator />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Portfolio;