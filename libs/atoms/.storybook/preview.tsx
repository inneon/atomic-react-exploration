import type { Preview } from "@storybook/react";
import { Global } from "../src/index";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <Global>
        <div style={{ padding: "2rem" }}>
          <Story />
        </div>
      </Global>
    ),
  ],
};

export default preview;
