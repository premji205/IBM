import { GraduationCap, Award, Briefcase, Globe } from 'lucide-react';

export const About = () => {
  const educationData = [
    {
      institution: "Panimalar Engineering College, Chennai",
      degree: "B.Tech Information Technology",
      period: "2023 – 2027",
      grade: "CGPA: 8.35/10 (Out of 3rd Sem)",
      icon: GraduationCap,
    },
    {
      institution: "Jaya Matriculation Higher Secondary School",
      degree: "Higher Secondary Certificate",
      period: "2023",
      grade: "79.5%",
      icon: Award,
    },
    {
      institution: "Secondary School Certificate",
      degree: "SSLC",
      period: "2021",
      grade: "All Pass",
      icon: Award,
    },
  ];

  const achievements = [
    {
      title: "Oracle Certification",
      description: "Database management and SQL proficiency",
      icon: Award,
    },
    {
      title: "Nasscom Certification", 
      description: "Industry recognition in technology",
      icon: Award,
    },
    {
      title: "Data Analytics Internship",
      description: "AI-LLMs at Vois For Tech",
      icon: Briefcase,
    },
    
  ];

  const languages = [
    { name: "Tamil", level: "Native", flag: "🇮🇳" },
    { name: "English", level: "Moderate", flag: "🇺🇸" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-neon text-glow mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-cyan" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Bio & Profile */}
          <div className="space-y-8">
            <div className="glass-panel p-8 hover:glow-cyan transition-all duration-300">
              <h3 className="font-orbitron font-semibold text-2xl text-primary mb-6">
                My Journey
              </h3>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                I am a motivated and detail-oriented Computer Science Engineering student with strong 
                programming and problem-solving skills. My passion lies in leveraging technical knowledge 
                to develop practical solutions that address real-world challenges.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Currently pursuing my B.Tech in Information Technology at Panimalar Engineering College, 
                I am focused on building a strong foundation in software development, data analytics, 
                and emerging technologies like AI and machine learning.
              </p>
            </div>

            {/* Languages */}
            <div className="glass-panel p-8 hover:glow-purple transition-all duration-300">
              <h3 className="font-orbitron font-semibold text-2xl text-secondary mb-6 flex items-center gap-3">
                <Globe className="glow-purple" />
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="glass-panel p-4 rounded-lg hover:glow-pink transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{lang.flag}</span>
                      <h4 className="font-semibold text-accent">{lang.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Education Timeline */}
          <div className="space-y-8">
            <div className="glass-panel p-8 hover:glow-cyan transition-all duration-300">
              <h3 className="font-orbitron font-semibold text-2xl text-primary mb-8 flex items-center gap-3">
                <GraduationCap className="glow-cyan" />
                Education
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />
                
                {educationData.map((edu, index) => {
                  const IconComponent = edu.icon;
                  return (
                    <div key={index} className="relative flex items-start gap-6 mb-8 last:mb-0">
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0 w-12 h-12 glass-panel rounded-full flex items-center justify-center glow-cyan z-10">
                        <IconComponent size={20} className="text-primary" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 glass-panel p-6 rounded-lg hover:glow-purple transition-all duration-300">
                        <h4 className="font-orbitron font-semibold text-lg text-foreground mb-2">
                          {edu.institution}
                        </h4>
                        <p className="text-secondary font-medium mb-1">{edu.degree}</p>
                        <p className="text-accent text-sm mb-2">{edu.period}</p>
                        <p className="text-primary font-semibold">{edu.grade}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="glass-panel p-8 hover:glow-purple transition-all duration-300">
          <h3 className="font-orbitron font-semibold text-2xl text-secondary mb-8 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="glass-panel p-6 rounded-lg hover:glow-pink transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 glass-panel rounded-full flex items-center justify-center mb-4 group-hover:glow-pink transition-all duration-300">
                      <IconComponent size={28} className="text-accent" />
                    </div>
                    <h4 className="font-orbitron font-semibold text-lg text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};