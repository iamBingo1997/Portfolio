import { useMemo } from "react";
import { useTheme } from "@/components/ThemeProvider";

type Star = { top: number; left: number; size: number; duration: number; delay: number; opacity: number };

export const StarsBackground = ({ count = 140 }: { count?: number }) => {
  const { theme } = useTheme();
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: theme === "dark" ? count : 0 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() < 0.75 ? 1 : 2,
        duration: 1.4 + Math.random() * 2.6,
        delay: Math.random() * 3.5,
        opacity: 0.06 + Math.random() * 0.2,
      })),
    [count, theme],
  );

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${theme === "dark" ? "block" : "hidden"}`}>
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            // Render only in dark mode; container is hidden in light
            opacity: theme === "dark" ? s.opacity : 0,
            backgroundColor: theme === "dark" ? "rgba(255,255,255,0.9)" : "transparent",
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            filter: theme === "dark" ? "blur(0.6px)" : "none",
          }}
        />
      ))}
    </div>
  );
}