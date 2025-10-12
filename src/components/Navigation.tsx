import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("");

  // toggleTheme provided by ThemeProvider

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const stripSlash = (p: string) => (p === "/" ? "home" : p.replace(/^\//, ""));
  const sectionFromPath = useMemo(() => stripSlash(location.pathname), [location.pathname]);
  const currentHighlight = activeSection || sectionFromPath;

  // هندلر کلیک برای اسکرول به ابتدای صفحه/سکشن home
  const handleHomeClick = () => {
    const el = document.getElementById("home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]) {
          const id = (visible[0].target as HTMLElement).id;
          // Only update if actually changed to avoid jitter
          setActiveSection((prev) => (prev !== id ? id : prev));
        }
      },
      {
        // Focus around center of viewport for stable selection
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={handleHomeClick} className="text-xl font-semibold text-foreground hover:text-primary smooth-transition">
            Amirabbas Taheri
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const linkSection = stripSlash(link.path);
              const active = currentHighlight === linkSection;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={link.path === "/" ? handleHomeClick : undefined}
                  className={`text-sm font-medium smooth-transition ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-4"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            {navLinks.map((link) => {
              const linkSection = stripSlash(link.path);
              const active = currentHighlight === linkSection;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    if (link.path === "/") handleHomeClick();
                    setIsMenuOpen(false);
                  }}
                  className={`block py-3 text-sm font-medium smooth-transition ${
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};
