import type { Preview } from "@storybook/nextjs-vite";
import React from "react";
import "../app/globals.css";

/**
 * Mirror next/font CSS variables from app/layout.tsx so Storybook
 * matches production typography without redesigning anything.
 */
const fontStyles = `
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Big+Shoulders:opsz,wght@10..72,600;10..72,700;10..72,800;10..72,900&family=JetBrains+Mono:wght@400;500&display=swap");

:root {
  --font-bigshoulders: "Big Shoulders", system-ui, sans-serif;
  --font-archivo: "Archivo", system-ui, sans-serif;
  --font-jetbrains: "JetBrains Mono", ui-monospace, monospace;
}

html, body {
  background-color: #fcfbf9;
  color: #16161a;
  font-family: var(--font-archivo), system-ui, sans-serif;
}
`;

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "brand",
      values: [{ name: "brand", value: "#fcfbf9" }],
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>{fontStyles}</style>
        <div className="min-h-screen bg-[#fcfbf9] text-text-primary antialiased">
          <Story />
        </div>
      </>
    ),
  ],
};

export default preview;
