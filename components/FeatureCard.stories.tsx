import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Truck } from "lucide-react";
import FeatureCard from "./FeatureCard";

const meta = {
  title: "UI/FeatureCard",
  component: FeatureCard,
  decorators: [
    (Story) => (
      <div className="p-8 max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Truck className="w-5 h-5" style={{ color: "#ff6a00" }} />,
    title: "Dispatch that sticks",
    description:
      "Assign loads, track status, and keep the yard moving without spreadsheet chaos.",
    benefit: "Fewer missed loads",
  },
};
