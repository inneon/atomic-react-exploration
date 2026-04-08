import type { Meta, StoryObj } from "@storybook/react-vite";
import { Atoms } from "./atoms";
import { expect } from "storybook/test";

const meta = {
  component: Atoms,
  title: "Atoms",
} satisfies Meta<typeof Atoms>;
export default meta;

type Story = StoryObj<typeof Atoms>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Atoms/gi)).toBeTruthy();
  },
} satisfies Story;
