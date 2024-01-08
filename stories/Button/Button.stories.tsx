import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@kuma-ui/core';
import { KumaRegistry } from '@kuma-ui/next-plugin/registry';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'transparent',
        'outlined',
      ],
      description: 'Buttonの外観を変更します。',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      description: 'Buttonの中身を変更します。',
      control: 'text',
    },
  },

  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args} />,
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => <Button {...args} />,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => <Button {...args} />,
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => <Button {...args} />,
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  render: (args) => <Button {...args} />,
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => <Button {...args} />,
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
  },
  render: (args) => <Button {...args} />,
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: (args) => <Button {...args} />,
};
