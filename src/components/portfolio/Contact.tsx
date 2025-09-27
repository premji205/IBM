import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "premkumar2k24@gmail.com",
      href: "mailto:premkumar2k24@gmail.com",
      color: "cyan"
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 9445432488",
      href: "tel:+919445432488",
      color: "purple"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prem-kumar-r-b0927b291",
      href: "https://linkedin.com/in/prem-kumar-r-b0927b291",
      color: "pink"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "No1, Ram Nagar, Thiruninravur, Chennai – 602024",
      href: "#",
      color: "cyan"
    }
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent via-background/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-neon text-glow mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-cyan" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello, 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-xl hover:glow-cyan transition-all duration-300">
              <h3 className="font-orbitron font-semibold text-2xl text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`p-3 glass-panel rounded-lg group-hover:${getGlowClass(info.color)} transition-all duration-300`}>
                        <IconComponent size={20} className={getTextColor(info.color)} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-orbitron font-medium text-foreground mb-1">
                          {info.label}
                        </h4>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : '_self'}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                            className={`${getTextColor(info.color)} hover:text-glow transition-all duration-300 text-sm break-all`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Message */}
            <div className="glass-panel p-6 rounded-xl hover:glow-purple transition-all duration-300">
              <h4 className="font-orbitron font-semibold text-lg text-secondary mb-3">
                Quick Connect
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Prefer a direct approach? Send me a WhatsApp message or connect on LinkedIn for faster communication.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/919445432488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass-panel p-3 rounded-lg hover:glow-cyan transition-all duration-300 text-center"
                >
                  <span className="text-primary font-medium text-sm">WhatsApp</span>
                </a>
                <a
                  href="https://linkedin.com/in/prem-kumar-r-b0927b291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 glass-panel p-3 rounded-lg hover:glow-purple transition-all duration-300 text-center"
                >
                  <span className="text-secondary font-medium text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-xl hover:glow-pink transition-all duration-300">
            <h3 className="font-orbitron font-semibold text-2xl text-accent mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glass-panel border-2 border-white/10 focus:border-primary/50 focus:glow-cyan transition-all duration-300 rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glass-panel border-2 border-white/10 focus:border-secondary/50 focus:glow-purple transition-all duration-300 rounded-lg"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="glass-panel border-2 border-white/10 focus:border-accent/50 focus:glow-pink transition-all duration-300 rounded-lg resize-none"
                  placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border-2 border-primary/30 hover:border-primary/60 text-primary hover:text-primary-foreground font-orbitron font-semibold py-3 rounded-xl hover:glow-cyan hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-panel p-8 rounded-xl hover:glow-cyan transition-all duration-300 inline-block max-w-2xl">
            <h3 className="font-orbitron font-semibold text-xl text-primary mb-4">
              Ready to Start Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new projects and collaborate with like-minded individuals. 
              Let's turn your ideas into reality!
            </p>
            <div className="flex items-center justify-center gap-2 text-accent">
              <CheckCircle size={20} className="glow-pink" />
              <span className="font-orbitron font-medium">Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};