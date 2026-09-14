import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Navbar from "./Navbar";

const meta = {
  title: "Site/Navbar",
  component: Navbar,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OnFeatures: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/features",
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
