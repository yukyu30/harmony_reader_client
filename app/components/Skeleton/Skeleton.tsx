import { Box, css } from '@kuma-ui/core';

type Props = {
  width?: number | string;
  height?: number | string;
  borderRadius?: string | number;
};

export const Skeleton = (props: Props) => {
  return (
    <Box
      className={css`
        position: relative;
        overflow: hidden;

        /* 光るアニメーション */
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        animation: shimmer 2s infinite linear;
        background: linear-gradient(
          to right,
          #d7d8da 0%,
          #f4f5f8 50%,
          #d7d8da 100%
        );
        background-size: 200px 100%;
      `}
      minHeight={'10px'}
      minWidth={'10px'}
      width={props.width || '100%'}
      height={props.height || '100%'}
      borderRadius={props.borderRadius || 'radii.md'}
    ></Box>
  );
};
export default Skeleton;
