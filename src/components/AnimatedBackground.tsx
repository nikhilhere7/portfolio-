const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-muted/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-muted/20 rounded-full blur-3xl animate-pulse-slow"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] animate-grid-move"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-border/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-border/20 animate-spin-reverse"></div>
      <div className="absolute top-2/3 right-1/3 w-20 h-20 border-2 border-border/40 rounded-full animate-bounce-slow"></div>
    </div>
  );
};

export default AnimatedBackground;
