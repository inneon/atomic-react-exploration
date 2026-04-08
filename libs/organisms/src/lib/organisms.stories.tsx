import type { Meta, StoryObj } from "@storybook/react-vite";
import { Organisms } from "./organisms";
import { expect } from "storybook/test";

const meta = {
  component: Organisms,
  title: "Organisms",
} satisfies Meta<typeof Organisms>;
export default meta;

type Story = StoryObj<typeof Organisms>;

export const Primary = {
  args: {},
} satisfies Story;

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Organisms/gi)).toBeTruthy();
  },
} satisfies Story;
