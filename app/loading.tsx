export default function Loading() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "60vh" }}
      role="status"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-10 h-10 rounded-full animate-spin-slow"
          style={{
            border: "2px solid rgba(255,122,26,0.15)",
            borderTopColor: "#ff7a1a",
          }}
        />
        <p
          className="font-mono text-xs uppercase tracking-[0.2em]"
          style={{ color: "#64748b" }}
        >
          Loading
        </p>
      </div>
    </div>
  );
}
