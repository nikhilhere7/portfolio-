const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-center justify-center mb-8 opacity-0 animate-fade-in">
            <div className="h-px w-12 bg-border animate-[slideRight_1s_ease-out_forwards]"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mx-6 hover:scale-105 transition-transform duration-300">About Me</h2>
            <div className="h-px w-12 bg-border animate-[slideLeft_1s_ease-out_forwards]"></div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center opacity-0 animate-fade-in hover:text-foreground transition-colors duration-300" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            I'm a passionate Data & Analytics professional from India, currently pursuing a Bachelor's in Computer Science. 
            My focus lies in building data-driven solutions through analytics, visualization, and machine learning. 
            I enjoy working with large datasets, creating insightful dashboards, and exploring modern data tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
