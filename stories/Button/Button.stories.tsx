import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@kuma-ui/core';

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
      description: 'Buttonの外観。',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      description: 'Buttonの中身。ReactNodeを渡すことができます。',
      control: 'text',
    },
  },

  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
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
