import type { Preview } from '@storybook/react';
import { KumaRegistry } from '@kuma-ui/next-plugin/registry';
import React from 'react';
const preview: Preview = {
  decorators: [
    (Story) => (
      <KumaRegistry>
        <Story />
      </KumaRegistry>
    ),
  ],
};

export default preview;
