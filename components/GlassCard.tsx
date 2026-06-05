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
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,106,0,0.22)] hover:shadow-[0_0_32px_rgba(255,106,0,0.14),0_0_64px_rgba(255,168,72,0.06)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
