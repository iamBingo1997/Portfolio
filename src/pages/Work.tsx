import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

const Work = () => {
  const projects = [
    {
      title: "E-Commerce Redesign",
      description: "Complete redesign of an e-commerce platform focused on improving conversion rates and user experience.",
      role: "Lead Product Designer",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      slug: "ecommerce-redesign",
      tags: ["UX Research", "UI Design", "Prototyping"],
    },
    {
      title: "Mobile Banking App",
      description: "Intuitive mobile banking experience with focus on security and ease of use.",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      slug: "mobile-banking",
      tags: ["Mobile Design", "Financial UX", "Accessibility"],
    },
    {
      title: "SaaS Dashboard",
      description: "Clean and efficient dashboard design for a B2B SaaS platform with complex data visualization.",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      slug: "saas-dashboard",
      tags: ["Dashboard Design", "Data Viz", "B2B"],
    },
    {
      title: "Healthcare Portal",
      description: "Patient-centered healthcare portal improving communication between patients and providers.",
      role: "Senior UX Designer",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      slug: "healthcare-portal",
      tags: ["Healthcare", "User Research", "Responsive Design"],
    },
    {
      title: "Travel Booking Platform",
      description: "Streamlined booking experience making travel planning effortless and enjoyable.",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      slug: "travel-booking",
      tags: ["Travel", "UX Strategy", "Mobile First"],
    },
    {
      title: "Design System",
      description: "Comprehensive design system for a growing startup, ensuring consistency across products.",
      role: "Design System Lead",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      slug: "design-system",
      tags: ["Design Systems", "Component Library", "Documentation"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Selected Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collection of projects showcasing my design process, from research to final implementation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
