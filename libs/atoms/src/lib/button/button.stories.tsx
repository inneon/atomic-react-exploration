import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta = {
  component: Button,
  title: "Atoms/Button",
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    children: "Click me",
    disabled: false,
    onClick: () => alert("Button clicked!"),
  },
} satisfies Story;

export const Disabled = {
  args: {
    children: "Can't click me",
    disabled: true,
    onClick: () => alert("Button clicked!"),
  },
} satisfies Story;
