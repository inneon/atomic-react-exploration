import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
  decorators: [(Story) => <Story />],
};

export default preview;
