import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Telecom Customer Churn Analysis",
    description: "Processed and analyzed 7,000+ customer records using Python (Pandas, NumPy, Seaborn) to identify churn-driving factors. Performed EDA to uncover patterns between contract type, tenure, and churn probability, improving insight accuracy by 25%. Automated data-cleaning scripts that reduced preprocessing time by 40%.",
    link: "https://github.com/nikhilhere7",
    tags: ["Python", "Pandas", "Power BI", "EDA", "Data Cleaning"]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and professional experience with modern animations and responsive design.",
    link: "https://github.com/nikhilhere7",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Income & Expense Prediction (ML Project)",
    description: "Machine Learning project analyzing ANZ bank transaction data to predict each user's income and expenses. Includes feature engineering, Random Forest models, evaluation, insights, and full documentation.",
    link: "https://github.com/nikhilhere7/Expenses-Income-Prediction",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-Learn", "Finance"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-card border-2 border-border rounded-xl p-8 space-y-6 transition-all duration-500 hover:border-foreground hover:shadow-2xl hover:scale-105 hover:-translate-y-2 glow-hover opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 * (index + 1)}s`, animationFillMode: 'forwards' }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground transition-colors duration-300 hover:text-primary">
                  {project.title}
                </h3>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed transition-colors duration-300 hover:text-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground opacity-0 animate-fade-in"
                      style={{ animationDelay: `${0.15 * (index + 1) + 0.1 * idx}s`, animationFillMode: 'forwards' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group border-2 hover:bg-foreground hover:text-background transition-all duration-500 hover:scale-105 hover:shadow-xl"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  View on GitHub
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-125" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
