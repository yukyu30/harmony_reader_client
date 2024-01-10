import type { Meta, StoryObj } from '@storybook/react';
import Popover from '../../app/components/Popover';
const meta = {
  title: 'Popover',
  component: Popover,
  argTypes: {},
  args: {
    children: 'Popover',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Popover {...args} />,
};
