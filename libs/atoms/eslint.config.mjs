import nx from "@nx/eslint-plugin";
import baseConfig from "../../eslint.config.mjs";

export default [
  ...nx.configs["flat/react"],
  ...baseConfig,
  {
    ignores: [
      "storybook-static/**",
      "node_modules/**",
      ".cache/**",
      ".vite-temp/**",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    // Override or add rules here
    rules: {},
  },
];
