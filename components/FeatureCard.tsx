// components/FeatureCard.tsx
import { ReactNode } from "react";
import GlassCard from "@/components/GlassCard";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefit: string;
}

export default function FeatureCard({ icon, title, description, benefit }: FeatureCardProps) {
  return (
    <GlassCard className="p-6 flex flex-col h-full">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{
          background: "rgba(255,122,26,0.10)",
          border: "1px solid rgba(255,122,26,0.18)",
        }}
      >
        {icon}
      </div>
      <h3 className="text-base font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed flex-1">{description}</p>
      <span
        className="font-mono text-xs uppercase tracking-[0.12em] mt-4 pt-4 border-t"
        style={{ color: "#ff7a1a", borderColor: "rgba(255,122,26,0.12)" }}
      >
        {benefit}
      </span>
    </GlassCard>
  );
}
