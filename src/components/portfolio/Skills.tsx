import { Code, Database, Globe, Settings, Heart, Users, Clock, Crown, MessageCircle } from 'lucide-react';

export const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "C"],
      icon: Code,
      color: "cyan",
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript"],
      icon: Globe,
      color: "purple",
    },
    {
      category: "Database",
      skills: ["MySQL"],
      icon: Database,
      color: "pink",
    },
    {
      category: "Tools & IDE",
      skills: ["VS Code", "GitHub"],
      icon: Settings,
      color: "cyan",
    },
  ];

  const softSkills = [
    { name: "Teamwork", icon: Users, color: "cyan" },
    { name: "Time Management", icon: Clock, color: "purple" },
    { name: "Leadership", icon: Crown, color: "pink" },
    { name: "Effective Communication", icon: MessageCircle, color: "cyan" },
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

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent via-background/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-neon text-glow mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-cyan" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical competencies and professional skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="font-orbitron font-semibold text-2xl text-primary mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={index} 
                  className={`glass-panel p-6 rounded-xl hover:${getGlowClass(category.color)} transition-all duration-300 hover:scale-105 group`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 glass-panel rounded-full flex items-center justify-center mx-auto mb-4 group-hover:${getGlowClass(category.color)} transition-all duration-300`}>
                      <IconComponent size={28} className={getTextColor(category.color)} />
                    </div>
                    <h4 className="font-orbitron font-semibold text-lg text-foreground mb-4">
                      {category.category}
                    </h4>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="glass-panel px-3 py-2 rounded-lg">
                          <span className={`text-sm font-medium ${getTextColor(category.color)}`}>
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="glass-panel p-8 rounded-xl hover:glow-purple transition-all duration-300">
          <h3 className="font-orbitron font-semibold text-2xl text-secondary mb-8 text-center flex items-center justify-center gap-3">
            <Heart className="glow-purple" />
            Soft Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className={`group text-center p-6 glass-panel rounded-xl hover:${getGlowClass(skill.color)} transition-all duration-300 hover:scale-105`}
                >
                  <div className={`w-12 h-12 glass-panel rounded-full flex items-center justify-center mx-auto mb-4 group-hover:${getGlowClass(skill.color)} transition-all duration-300`}>
                    <IconComponent size={20} className={getTextColor(skill.color)} />
                  </div>
                  <h4 className="font-orbitron font-medium text-foreground">
                    {skill.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Animation */}
        <div className="mt-12 text-center">
          <div className="glass-panel p-6 rounded-xl hover:glow-cyan transition-all duration-300 inline-block">
            <p className="text-primary font-orbitron font-semibold text-lg">
              "Continuously learning and growing in the ever-evolving tech landscape"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};