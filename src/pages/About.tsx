import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle } from "lucide-react";

const About = () => {
  const skills = [
    "UX Research",
    "User Testing",
    "Wireframing",
    "Prototyping",
    "Visual Design",
    "Interaction Design",
    "Design Systems",
    "Responsive Design",
    "Accessibility",
    "Design Thinking",
  ];

  const tools = [
    { name: "Figma", icon: "🎨" },
    { name: "Adobe XD", icon: "✨" },
    { name: "Sketch", icon: "💎" },
    { name: "Miro", icon: "🗂️" },
    { name: "Notion", icon: "📝" },
    { name: "Framer", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I'm a Product Designer with over 5 years of experience creating
                  digital experiences that balance user needs with business goals.
                  My approach combines strategic thinking with careful attention to
                  detail, ensuring every design decision is both beautiful and
                  purposeful.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I believe great design starts with empathy and ends with clarity.
                  Through research, iteration, and collaboration, I craft solutions
                  that not only look good but solve real problems for real people.
                </p>
                <Button className="mt-6">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-48 h-48 rounded-2xl bg-gradient-cosmic overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <section className="mb-16 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Design Philosophy
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed italic">
                  "Great design is invisible. It should feel so natural that users
                  don't think about it—they just use it. My goal is to create
                  experiences that are intuitive, accessible, and delightful,
                  removing friction and adding value at every touchpoint."
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Skills */}
          <section className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 p-4 rounded-lg bg-card border border-border hover:card-glow smooth-transition"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">Design Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((tool, index) => (
                <Card
                  key={tool.name}
                  className="group hover:card-glow smooth-transition cursor-pointer"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="text-4xl group-hover:scale-110 smooth-transition">
                      {tool.icon}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {tool.name}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
