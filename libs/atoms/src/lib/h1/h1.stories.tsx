import type { Meta, StoryObj } from "@storybook/react-vite";
import { H1 } from "./h1";

const meta = {
  component: H1,
  title: "Atoms/H1",
} satisfies Meta<typeof H1>;
export default meta;

type Story = StoryObj<typeof H1>;

export const Normal = {
  args: {
    children: "This is a title",
    size: "M",
  },
} satisfies Story;
