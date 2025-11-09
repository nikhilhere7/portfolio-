import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:nikhilmahale456@gmail.com",
      color: "hover:text-foreground"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nikhilhere7",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nikhil-mahale-293987271/",
      color: "hover:text-foreground"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and discuss opportunities
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-16 fade-in">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 transition-all duration-300 ${social.color} hover:scale-110`}
              aria-label={social.label}
            >
              <div className="p-4 rounded-full border border-border hover:border-foreground transition-colors duration-300">
                <social.icon className="w-6 h-6" />
              </div>
              <span className="text-sm text-muted-foreground">{social.label}</span>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-border focus:border-foreground transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-border focus:border-foreground transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px] border-border focus:border-foreground transition-colors resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full group hover:scale-[1.02] transition-all duration-300"
              size="lg"
            >
              Send Message
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
