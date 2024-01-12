import { Box, css } from '@kuma-ui/core';

type Props = {
  children: React.ReactNode;
};

export const Popover = (props: Props) => {
  return (
    <Box
      border={'1px solid'}
      borderColor="colors.light-dark"
      padding={8}
      borderRadius="radii.lg"
      bg="colors.background"
    >
      {props.children}
    </Box>
  );
};
export default Popover;
