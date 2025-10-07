import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  image: string;
  slug: string;
  tags: string[];
}

export const ProjectCard = ({
  title,
  description,
  role,
  image,
  slug,
  tags,
}: ProjectCardProps) => {
  return (
    <Link to={`/work/${slug}`}>
      <Card className="group overflow-hidden border-border hover:card-glow smooth-transition cursor-pointer">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary smooth-transition">
              {title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary smooth-transition opacity-0 group-hover:opacity-100" />
          </div>
          <p className="text-sm text-muted-foreground mb-3">{role}</p>
          <p className="text-sm text-foreground/80 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
