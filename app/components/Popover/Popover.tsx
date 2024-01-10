import { Box, css } from '@kuma-ui/core';

type Props = {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
};

export const Popover = (props: Props) => {
  return (
    <Box
      ref={props.ref}
      border={'1px solid'}
      borderColor="colors.light-dark"
      padding={8}
      borderRadius="radii.lg"
    >
      {props.children}
    </Box>
  );
};
export default Popover;
