"use client";

import type { ReactNode } from "react";

/**
 * Oversized display heading whose words rise out of overflow masks.
 * Words prefixed with ^ render in safety orange.
 * Animation is driven centrally from HomeExperience (targets `.sw` spans
 * inside [data-stagger]); with no JS/reduced motion the text is simply visible.
 */
export function StaggerHeading({
  lines,
  className = "",
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag className={`display-heading ${className}`} data-stagger>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi) => {
            const accent = word.startsWith("^");
            const clean = accent ? word.slice(1) : word;
            return (
              <span
                key={wi}
                className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
              >
                <span
                  className={`sw inline-block will-change-transform ${
                    accent ? "text-brand-orange" : ""
                  }`}
                >
                  {clean}
                  {wi < line.split(" ").length - 1 ? " " : ""}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

/** Generic fade-up wrapper animated from HomeExperience via [data-reveal]. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className} data-reveal data-delay={delay}>
      {children}
    </div>
  );
}
