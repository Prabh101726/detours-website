import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StaggerHeading } from "./Stagger";

const meta = {
  title: "Story/StaggerHeading",
  component: StaggerHeading,
  decorators: [
    (Story) => (
      <div className="p-8 max-w-3xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StaggerHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  args: {
    as: "h1",
    lines: ["THE OPERATING SYSTEM", "FOR ^AGGREGATE FLEETS"],
  },
  play: async ({ canvasElement }) => {
    const h1 = canvasElement.querySelector("h1");
    if (!h1) throw new Error("expected h1");
    const text = (h1.textContent ?? "").replace(/\s+/g, " ").trim();
    // Space between line spans keeps textContent readable (a11y/SEO)
    if (!/OPERATING SYSTEM FOR/.test(text.toUpperCase())) {
      throw new Error(`StaggerHeading glued lines: "${text}"`);
    }
  },
};
