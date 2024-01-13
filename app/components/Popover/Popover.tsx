import { Box, css, styled } from '@kuma-ui/core';
import { Ref, RefObject } from 'react';

type Props = {
  anchorElement?: RefObject<HTMLElement>;
  position?: 'bottom' | 'top';
  align?: 'left' | 'right';
  children: React.ReactNode;
};

const fetchPositionPxValue = (
  element: HTMLElement,
  position: 'bottom' | 'top' = 'bottom',
  align: 'left' | 'right' = 'left'
): { left?: string; right?: string; top?: string; bottom?: string } => {
  const { top, left, width, height } = element.getBoundingClientRect();
  const { innerWidth, innerHeight } = window;

  let result = {};
  switch (position) {
    case 'top':
      result = { bottom: `${innerHeight - top}px` };
      break;
    case 'bottom':
    default:
      result = { top: `${top + height}px` };
      break;
  }

  switch (align) {
    case 'right':
      result = { ...result, right: `${innerWidth - left - width}px` };
      break;
    case 'left':
    default:
      result = { ...result, left: `${left}px` };
      break;
  }

  return result;
};

export const Popover = (props: Props) => {
  const pxPositions = props.anchorElement?.current
    ? fetchPositionPxValue(
        props.anchorElement.current,
        props.position,
        props.align
      )
    : {};
  return (
    <Box
      border={'1px solid'}
      borderColor="colors.light-dark"
      padding={8}
      borderRadius="radii.lg"
      bg="colors.background"
      display="inline-block"
      position="absolute"
      left={pxPositions.left ? pxPositions.left : ''}
      right={pxPositions.right ? pxPositions.right : ''}
      top={pxPositions.top ? pxPositions.top : ''}
      bottom={pxPositions.bottom ? pxPositions.bottom : ''}
    >
      {props.children}
    </Box>
  );
};
export default Popover;
