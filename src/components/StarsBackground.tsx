import { useMemo } from "react";

type Star = { top: number; left: number; size: number; duration: number; delay: number; opacity: number };

export const StarsBackground = ({ count = 140 }: { count?: number }) => {
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
    <div className="fixed inset-0 z-0 pointer-events-none dark:block hidden">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/90 animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            filter: "blur(0.6px)",
          }}
        />
      ))}
    </div>
  );
}