import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Navigation</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground smooth-transition">
                Home
              </Link>
              <Link to="/work" className="text-muted-foreground hover:text-foreground smooth-transition">
                Work
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground smooth-transition">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground smooth-transition">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary smooth-transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary smooth-transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary smooth-transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Get in Touch</h3>
            <a
              href="mailto:hello@designer.com"
              className="text-muted-foreground hover:text-primary smooth-transition"
            >
              hello@designer.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Amirabbas Taheri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
