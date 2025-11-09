import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Co-Founder & Operations Manager",
    company: "Veechimonk (E-Commerce Clothing Brand)",
    period: "jun 202 - aug 2025",
    link: "https://mydukaan.io/veechimonk/blog",
    highlights: [
      "Co-founded and managed an online clothing brand offering 20+ products and consistent monthly sales",
      "Designed and maintained automated dashboards to track revenue, sales, and inventory metrics",
      "Conducted customer trend analysis using Excel and Python to improve product restocking and pricing decisions",
      "Streamlined order and payment tracking workflows, reducing turnaround time by 30%"
    ]
  },
  {
    title: "Data Mining & Analytics Intern",
    company: "UptoSkills",
    period: "29 Oct 2024 – Present",
    link: null,
    highlights: [
      "Assisted in data collection, cleaning, and preprocessing for multiple business datasets",
      "Performed exploratory data analysis (EDA) using Python and Power BI to extract actionable insights",
      "Automated data reports and visual dashboards for internal review and decision-making",
      "Supported the analytics team in identifying trends and patterns to improve data-driven outcomes"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-xl p-8 space-y-6 transition-all duration-500 hover:border-foreground hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 glow-hover opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 * (index + 1)}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {experience.title}
                    </h3>
                    {experience.link ? (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        <Briefcase className="w-5 h-5" />
                        {experience.company}
                      </a>
                    ) : (
                      <p className="text-lg text-muted-foreground inline-flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        {experience.company}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm md:text-base">{experience.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {experience.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-base md:text-lg text-muted-foreground leading-relaxed flex gap-3"
                    >
                      <span className="text-foreground mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
