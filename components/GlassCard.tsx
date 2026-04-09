import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`glass ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_24px_rgba(255,122,26,0.08)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
