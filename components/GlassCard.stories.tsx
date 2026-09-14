import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import GlassCard from "./GlassCard";

const meta = {
  title: "UI/GlassCard",
  component: GlassCard,
} satisfies Meta<typeof GlassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "p-6 m-8 max-w-md",
    children: (
      <>
        <h3 className="font-display text-2xl mb-2">Glass surface</h3>
        <p className="text-sm text-text-muted">
          Current frosted card treatment — no redesign, just isolation.
        </p>
      </>
    ),
  },
};

export const NoHover: Story = {
  args: {
    hover: false,
    className: "p-6 m-8 max-w-md",
    children: (
      <p className="text-sm text-text-muted">Hover lift disabled.</p>
    ),
  },
};
