import { Code2, Database, BarChart3, GitBranch, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python (NumPy, Pandas, Matplotlib, Seaborn)", "SQL", "C++", "Java"],
    link: "https://github.com/nikhilhere7"
  },
  {
    title: "Data Tools",
    icon: Database,
    skills: ["Excel (Pivot Tables, VLOOKUP)", "Power BI (DAX, Dashboards)", "Tableau"],
    link: "https://github.com/nikhilhere7"
  },
  {
    title: "Concepts",
    icon: BarChart3,
    skills: ["Exploratory Data Analysis (EDA)", "Data Cleaning", "Statistical Analysis", "Feature Engineering"],
    link: "https://github.com/nikhilhere7"
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
    link: null
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem-solving", "Teamwork", "Better Communication", "Content Writing"],
    link: null
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            Skills & Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="border-2 border-border rounded-xl p-6 bg-card transition-all duration-500 hover:border-foreground hover:shadow-2xl hover:scale-105 hover:-translate-y-2 glow-hover opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg transition-all duration-300 hover:bg-primary/20 hover:scale-110 hover:rotate-12">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground transition-colors duration-300 hover:text-primary">
                      {category.title}
                    </h3>
                    {category.link && (
                      <a
                        href={category.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                      >
                        (GITHUB)
                      </a>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="text-base text-muted-foreground flex gap-2 transition-all duration-300 hover:translate-x-2 hover:text-foreground"
                      >
                        <span className="text-foreground">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
