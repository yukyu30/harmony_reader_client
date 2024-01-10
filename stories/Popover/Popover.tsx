import React from 'react';

interface PopoverProps {
  children?: React.ReactNode;
}

export const Popover = ({ children }: PopoverProps) => {
  return <Popover>{children}</Popover>;
};
