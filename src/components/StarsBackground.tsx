import { useMemo } from "react";
import { useTheme } from "@/components/ThemeProvider";

type Star = { top: number; left: number; size: number; duration: number; delay: number; opacity: number };

export const StarsBackground = ({ count = 140 }: { count?: number }) => {
  const { theme } = useTheme();
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: count }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() < 0.75 ? 1 : 2,
        duration: 1.4 + Math.random() * 2.6,
        delay: Math.random() * 3.5,
        opacity: 0.06 + Math.random() * 0.2,
      })),
    [count],
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none block">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            // Slightly lower opacity in light mode to keep subtle
            opacity: theme === "dark" ? s.opacity : Math.min(0.12, s.opacity * 0.7),
            // Adjust color per theme for contrast harmony
            backgroundColor: theme === "dark" ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.7)",
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            filter: theme === "dark" ? "blur(0.6px)" : "blur(0.4px)",
          }}
        />
      ))}
    </div>
  );
}