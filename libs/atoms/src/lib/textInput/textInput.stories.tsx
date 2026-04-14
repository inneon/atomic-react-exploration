import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./textInput";

const meta = {
  component: TextInput,
  title: "Atoms/TextInput",
} satisfies Meta<typeof TextInput>;
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Normal = {
  args: {
    placeholder: "Enter your user name",
    label: "User name",
  },
} satisfies Story;

export const Disabled = {
  args: {
    placeholder: "Set by system",
    label: "Stream id",
    disabled: true,
  },
} satisfies Story;
