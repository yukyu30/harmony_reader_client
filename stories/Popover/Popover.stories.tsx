import type { Meta, StoryObj } from '@storybook/react';
import Popover from '../../app/components/Popover';
const meta = {
  title: 'Popover',
  component: Popover,
  argTypes: {
    children: {
      description: 'Popoverの中身。ReactNodeを渡すことができます。',
      control: 'text',
    },
  },
  args: {
    children: 'Popover',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Popover {...args} />,
};
