import { signOut } from 'next-auth/react';
import { Box, VStack, Image, Button, css } from '@kuma-ui/core';
import { useState, useRef, useEffect } from 'react';
import Popover from '../Popover';

type Props = {
  avatar?: string;
};

export default function UserMenu(props: Props) {
  const [OpenMenuPopover, setOpenMenuPopover] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuPopover(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Image
        variant="avatar"
        src={props.avatar || '/avatar-defalut.png'}
        onClick={() => setOpenMenuPopover(!OpenMenuPopover)}
      />
      {OpenMenuPopover && (
        <Box
          className={css`
            position: absolute;
            right: 0px;
          `}
          marginRight="spacings.md"
        >
          <Popover ref={menuRef}>
            <VStack>
              <Button
                variant="transparent"
                paddingRight="2rem"
                paddingLeft="1rem"
                textAlign="left"
                fontSize="fontSizes.sm"
              >
                設定
              </Button>
              <Button
                variant="transparent"
                paddingRight="2rem"
                paddingLeft="1rem"
                textAlign="left"
                onClick={() => signOut()}
                fontSize="fontSizes.sm"
              >
                ログアウト
              </Button>
            </VStack>
          </Popover>
        </Box>
      )}
    </div>
  );
}
