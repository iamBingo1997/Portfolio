import { useEffect, useMemo, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Sparkles, Download, CheckCircle, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { StarsBackground } from "@/components/StarsBackground";
import { ProjectCard } from "@/components/ProjectCard";
import { toast } from "sonner";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const targetId = path === "/" ? "home" : path.replace("/", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const projects = useMemo(
    () => [
      {
        title: "E-Commerce Redesign",
        description:
          "Complete redesign of an e-commerce platform focused on improving conversion rates and user experience.",
        role: "Lead Product Designer",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        slug: "ecommerce-redesign",
        tags: ["UX Research", "UI Design", "Prototyping"],
      },
      {
        title: "Mobile Banking App",
        description:
          "Intuitive mobile banking experience with focus on security and ease of use.",
        role: "UX/UI Designer",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        slug: "mobile-banking",
        tags: ["Mobile Design", "Financial UX", "Accessibility"],
      },
      {
        title: "SaaS Dashboard",
        description:
          "Clean and efficient dashboard design for a B2B SaaS platform with complex data visualization.",
        role: "Product Designer",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        slug: "saas-dashboard",
        tags: ["Dashboard Design", "Data Viz", "B2B"],
      },
      {
        title: "Healthcare Portal",
        description:
          "Patient-centered healthcare portal improving communication between patients and providers.",
        role: "Senior UX Designer",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        slug: "healthcare-portal",
        tags: ["Healthcare", "User Research", "Responsive Design"],
      },
      {
        title: "Travel Booking Platform",
        description:
          "Streamlined booking experience making travel planning effortless and enjoyable.",
        role: "Lead Designer",
        image:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
        slug: "travel-booking",
        tags: ["Travel", "UX Strategy", "Mobile First"],
      },
      {
        title: "Design System",
        description:
          "Comprehensive design system for a growing startup, ensuring consistency across products.",
        role: "Design System Lead",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        slug: "design-system",
        tags: ["Design Systems", "Component Library", "Documentation"],
      },
    ],
    [],
  );

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gradient-night relative">
      <Navigation />
      <StarsBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-6 scroll-mt-24">
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

        {/* Work Section */}
        <section id="work" className="pt-24 pb-20 px-6 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Selected Work</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A collection of projects showcasing my design process, from research to final implementation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={project.slug} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="pt-24 pb-20 px-6 scroll-mt-24">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4">
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    I'm a Product Designer with over 5 years of experience creating digital experiences that balance user needs with business goals.
                    My approach combines strategic thinking with careful attention to detail, ensuring every design decision is both beautiful and purposeful.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    I believe great design starts with empathy and ends with clarity. Through research, iteration, and collaboration, I craft solutions that not only look good but solve real problems for real people.
                  </p>
                  <Button className="mt-6">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="w-48 h-48 rounded-2xl bg-gradient-cosmic overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}photo.jpg`}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <section className="mb-16 animate-fade-in">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Design Philosophy</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed italic">
                    "Great design is invisible. It should feel so natural that users don't think about it—they just use it. My goal is to create experiences that are intuitive, accessible, and delightful, removing friction and adding value at every touchpoint."
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {["UX Research","User Testing","Wireframing","Prototyping","Visual Design","Interaction Design","Design Systems","Responsive Design","Accessibility","Design Thinking"].map((skill, index) => (
                  <div key={skill} className="flex items-center gap-2 p-4 rounded-lg bg-card border border-border hover:card-glow smooth-transition" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Design Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[{ name: "Figma", icon: "🎨" },{ name: "Adobe XD", icon: "✨" },{ name: "Sketch", icon: "💎" },{ name: "Miro", icon: "🗂️" },{ name: "Notion", icon: "📝" },{ name: "Framer", icon: "⚡" }].map((tool, index) => (
                  <Card key={tool.name} className="group hover:card-glow smooth-transition cursor-pointer" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CardContent className="p-6 text-center space-y-2">
                      <div className="text-4xl group-hover:scale-110 smooth-transition">{tool.icon}</div>
                      <div className="text-sm font-medium text-foreground">{tool.name}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-24 pb-20 px-6 scroll-mt-24">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-16 text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can work together to create something amazing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="animate-fade-in">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={6} required />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Card className="hover:card-glow smooth-transition">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10"><Mail className="h-6 w-6 text-primary" /></div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <a href="mailto:hello@designer.com" className="text-muted-foreground hover:text-primary smooth-transition">hello@designer.com</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:card-glow smooth-transition">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Connect</h3>
                    <div className="flex gap-4">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-card border border-border hover:border-primary smooth-transition group"><Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary" /></a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-card border border-border hover:border-primary smooth-transition group"><Github className="h-6 w-6 text-muted-foreground group-hover:text-primary" /></a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-card border border-border hover:border-primary smooth-transition group"><Twitter className="h-6 w-6 text-muted-foreground group-hover:text-primary" /></a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-cosmic p-6 text-white">
                  <CardContent className="p-0">
                    <h3 className="font-semibold mb-2">Availability</h3>
                    <p className="text-white/90">Currently available for freelance projects and collaborations. Response time: 24-48 hours.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
