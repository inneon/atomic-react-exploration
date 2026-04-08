import type { Meta, StoryObj } from "@storybook/react-vite";
import { Templates } from "./templates";
import { expect } from "storybook/test";

const meta = {
  component: Templates,
  title: "Templates",
} satisfies Meta<typeof Templates>;
export default meta;

type Story = StoryObj<typeof Templates>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Templates/gi)).toBeTruthy();
  },
} satisfies Story;
