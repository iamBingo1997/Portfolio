import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const SideScrollNav = ({ visible = false, fadeAmount = 1 }: { visible?: boolean; fadeAmount?: number }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("");

  const stripSlash = (p: string) => (p === "/" ? "home" : p.replace(/^\//, ""));
  const sectionFromPath = useMemo(() => stripSlash(location.pathname), [location.pathname]);
  const currentHighlight = activeSection || sectionFromPath;

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
          setActiveSection((prev) => (prev !== id ? id : prev));
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleClick = (path: string) => {
    const targetId = stripSlash(path);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // انیمیشن یکنواخت برای تمام عناوین
  const textVariants = {
    initial: { opacity: 0.9, y: 0 },
    animate: { opacity: 1, y: -1 },
  };

  const hidden = !visible || fadeAmount <= 0.05;

  return (
    <motion.nav
      className={`fixed left-4 lg:left-6 top-28 lg:top-32 z-40 hidden md:block ${hidden ? "pointer-events-none" : ""}`}
      aria-hidden={hidden}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: visible ? fadeAmount : 0, x: hidden ? -8 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="flex flex-col p-3 lg:p-4 pr-6 rounded-xl bg-card/70 backdrop-blur-lg shadow-xl" style={{ height: "calc(100vh - 200px)" }}>
        <div className="flex flex-1 flex-col justify-between gap-6 pb-16">
          {navLinks.map((link) => {
            const linkSection = stripSlash(link.path);
            const active = currentHighlight === linkSection;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleClick(link.path)}
                className={`relative flex items-center px-5 text-base md:text-xl lg:text-2xl font-semibold ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <motion.span initial="initial" animate={active ? "animate" : "initial"} variants={textVariants} className="py-1 pr-2">
                  {link.name}
                </motion.span>
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={active ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 h-[2px] bg-primary/70 rounded"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};