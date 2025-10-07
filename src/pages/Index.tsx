import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-gradient-night">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-4">
              <Sparkles className="h-4 w-4 text-primary animate-glow-pulse" />
              <span className="text-sm text-muted-foreground">Available for freelance</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Product Designer &<br />
              <span className="text-gradient">UX Specialist</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I design thoughtful digital experiences that connect people and brands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/work">
                <Button size="lg" className="group">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Design Philosophy
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I combine research, strategy, and visual design to craft intuitive,
              human-centered products. Every project starts with empathy and ends
              with clarity—creating experiences that not only look beautiful but
              solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2 animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-gradient">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl font-bold text-gradient">20+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Link to="/contact">
            <Button size="lg" className="mt-4">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
