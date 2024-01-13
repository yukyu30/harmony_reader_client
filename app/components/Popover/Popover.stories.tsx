import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button, VStack } from '@kuma-ui/core';
const meta = {
  title: 'Popover',
  component: Popover,
  argTypes: {
    children: {
      description: 'Popoverの中身。ReactNodeを渡すことができます。',
      control: 'text',
    },
    position: {
      description: 'Popoverの表示位置です。上下のどちらかを選択できます。',
      control: 'select',
      options: ['top', 'bottom'],
    },
    align: {
      description: 'Popover全体を右角、左角の寄せます。',
      control: 'select',
      options: ['left', 'right'],
    },
    anchorElement: {
      description:
        'Popoverの表示位置を決めるためのアンカー要素です。この要素の位置を基準にPopoverの表示位置が決まります。',
      control: 'object',
    },
  },
  args: {
    children: 'Popover',
    position: 'bottom',
    align: 'left',
  },
} satisfies Meta<typeof Popover>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Popover {...args} />,
};
