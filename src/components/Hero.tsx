import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import profileImage from "@/assets/profile.jpeg";
import { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Profile Image */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse-slow"></div>
            <img
              src={profileImage}
              alt="Nikhil Mahale"
              className="relative w-full h-full rounded-full object-cover border-4 border-border shadow-2xl transition-all duration-500 hover:scale-110 hover:border-primary hover:shadow-primary/50"
            />
          </div>
        </div>
        
        {/* Animated Text Content */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight animate-fade-in animate-bounce-slow opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Nikhil Mahale
          </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Data & Analytics Professional
          </h2>
          <p className="text-base md:text-lg text-muted-foreground animate-fade-in opacity-0 flex items-center justify-center gap-2" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            📍 Pune, Maharashtra
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Exploring Data Engineering, Data Science, and Analytics.
        </p>
        
        <p className="text-base md:text-lg font-medium text-foreground italic animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          "Transforming raw data into actionable insights."
        </p>

        <div className="pt-6 flex flex-wrap gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 hover:scale-110 hover:shadow-2xl active:scale-95"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 transition-all duration-500 hover:scale-110 hover:shadow-2xl active:scale-95"
              >
                View Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
              <DialogHeader>
                <DialogTitle>Resume Preview</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-[70vh] border rounded-lg"
                  title="Resume Preview"
                />
              </div>
              <div className="flex gap-4 justify-end mt-4">
                <Button
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
                <Button asChild>
                  <a href="/resume.pdf" download="Nikhil_Mahale_Resume.pdf">
                    Download Resume
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Hero;
