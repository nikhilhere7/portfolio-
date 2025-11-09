import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("about")}
              className="text-sm md:text-base transition-all duration-300 hover:scale-110"
            >
              About Me
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("skills")}
              className="text-sm md:text-base transition-all duration-300 hover:scale-110"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("experience")}
              className="text-sm md:text-base transition-all duration-300 hover:scale-110"
            >
              Professional Experience
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("projects")}
              className="text-sm md:text-base transition-all duration-300 hover:scale-110"
            >
              Featured Projects
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="text-sm md:text-base transition-all duration-300 hover:scale-110"
            >
              Get In Touch
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2 transition-all duration-500 hover:scale-110 hover:rotate-180"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5 transition-transform duration-500" />
            ) : (
              <Sun className="h-5 w-5 transition-transform duration-500" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
