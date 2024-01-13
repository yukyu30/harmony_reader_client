import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { KumaRegistry } from '@kuma-ui/next-plugin/registry';

const meta = {
  title: 'Skeleton',
  component: Skeleton,
  argTypes: {
    width: {
      description: 'Skelotonの幅です。',
      control: 'number',
      type: 'number',
    },
    height: {
      description: 'Skelotonの高さです。',
      control: 'number',
      type: 'number',
    },
    borderRadius: {
      description: 'Skelotonの角の丸みです。',
      control: 'number',
      type: 'number',
    },
  },
  args: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Skeleton {...args} />,
};
