import type { StorybookConfig } from '@storybook/nextjs';
import KumaUIWebpackPlugin from '@kuma-ui/webpack-plugin';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../app/components/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => {
    config.plugins = [...(config.plugins ?? []), new KumaUIWebpackPlugin()];

    return config;
  },
};
export default config;
