export default function StepNumber({ num }: { num: string }) {
  return (
    <div
      className="animate-pulse-soft w-12 h-12 rounded-full flex items-center justify-center mb-5 font-display text-xl"
      style={{
        background: "rgba(255,122,26,0.12)",
        border: "1px solid rgba(255,122,26,0.25)",
        color: "#ff7a1a",
      }}
    >
      {num}
    </div>
  );
}
