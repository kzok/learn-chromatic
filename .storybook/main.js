const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");

/** @type {import("@storybook/core-common").StorybookConfig} */
module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.context = ROOT_DIR;
    config.node = { ...config.node, __filename: true };
    return config;
  },
  core: {
    builder: "webpack5",
  },
};
