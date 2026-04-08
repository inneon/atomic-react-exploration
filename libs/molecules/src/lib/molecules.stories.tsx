import type { Meta, StoryObj } from "@storybook/react-vite";
import { Molecules } from "./molecules";
import { expect } from "storybook/test";

const meta = {
  component: Molecules,
  title: "Molecules",
} satisfies Meta<typeof Molecules>;
export default meta;

type Story = StoryObj<typeof Molecules>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Molecules/gi)).toBeTruthy();
  },
} satisfies Story;
