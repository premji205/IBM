import { ExternalLink, Github, Brain, Database, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      title: "Fake News Detection Using Machine Learning",
      description: "Built an intelligent model to detect fake news articles using advanced NLP techniques and machine learning algorithms including Naive Bayes and Logistic Regression.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NLTK", "Machine Learning"],
      features: [
        "Natural Language Processing for text analysis",
        "Multiple ML algorithms comparison",
        "High accuracy fake news classification",
        "Interactive web interface"
      ],
      icon: Brain,
      color: "cyan",
      status: "Completed",
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and TypeScript, featuring glassmorphism design and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive glassmorphism design",
        "Smooth scroll animations",
        "Interactive UI components",
        "SEO optimized"
      ],
      icon: Code,
      color: "pink",
      status: "Completed",
    },
  ];

  const getGlowClass = (color: string) => {
    switch (color) {
      case 'cyan': return 'glow-cyan';
      case 'purple': return 'glow-purple';
      case 'pink': return 'glow-pink';
      default: return 'glow-cyan';
    }
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case 'cyan': return 'text-primary';
      case 'purple': return 'text-secondary';
      case 'pink': return 'text-accent';
      default: return 'text-primary';
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'cyan': return 'border-primary/30 hover:border-primary/60';
      case 'purple': return 'border-secondary/30 hover:border-secondary/60';
      case 'pink': return 'border-accent/30 hover:border-accent/60';
      default: return 'border-primary/30 hover:border-primary/60';
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-neon text-glow mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-cyan" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing my technical expertise through innovative projects and practical solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className={`glass-panel p-6 rounded-xl hover:${getGlowClass(project.color)} transition-all duration-500 hover:scale-105 group border-2 ${getBorderColor(project.color)}`}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 glass-panel rounded-lg group-hover:${getGlowClass(project.color)} transition-all duration-300`}>
                    <IconComponent size={24} className={getTextColor(project.color)} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full glass-panel ${getTextColor(project.color)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Title & Description */}
                <h3 className="font-orbitron font-bold text-xl text-foreground mb-3 group-hover:text-glow transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-orbitron font-semibold text-sm text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Zap size={12} className={getTextColor(project.color)} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-orbitron font-semibold text-sm text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-2 py-1 text-xs font-medium rounded-lg glass-panel hover:${getGlowClass(project.color)} transition-all duration-300 ${getTextColor(project.color)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`flex-1 ${getBorderColor(project.color)} glass-panel hover:${getGlowClass(project.color)} transition-all duration-300`}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`flex-1 ${getBorderColor(project.color)} glass-panel hover:${getGlowClass(project.color)} transition-all duration-300`}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glass-panel p-8 rounded-xl hover:glow-purple transition-all duration-300 inline-block">
            <h3 className="font-orbitron font-semibold text-xl text-secondary mb-4">
              Interested in my work?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              I'm always working on new projects and exploring emerging technologies. 
              Let's connect and discuss potential collaborations!
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-secondary/20 hover:bg-secondary/30 border-2 border-secondary/50 hover:border-secondary text-secondary hover:text-secondary-foreground font-orbitron font-semibold px-8 py-3 rounded-xl hover:glow-purple hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};