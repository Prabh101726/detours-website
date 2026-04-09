// components/FeatureCard.tsx
import GlassCard from "@/components/GlassCard";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  benefit: string;
}

export default function FeatureCard({ icon, title, description, benefit }: FeatureCardProps) {
  return (
    <GlassCard className="p-6 flex flex-col gap-3">
      <span className="text-3xl">{icon}</span>
      <h3 className="text-lg font-bold text-text-primary">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      <span className="text-xs font-bold text-brand-orange mt-auto">{benefit}</span>
    </GlassCard>
  );
}
