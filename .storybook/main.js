const path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
    webpackFinal: async (config, { configType }) => {
      // so I can import { storyFactory } from '~storybook/util/helpers'
      config.resolve.alias['@/components'] = path.resolve(__dirname, '../components')
    return config;
  }
}