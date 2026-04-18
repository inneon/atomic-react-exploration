import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./card";
import { H1 } from "../h1/h1";

const meta = {
  component: Card,
  title: "Atoms/Card",
} satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof Card>;

export const Normal = {
  args: {
    children: (
      <div>
        <H1 size="M">Title</H1>
        <div>This is some content</div>
      </div>
    ),
    size: "S",
  },
} satisfies Story;
