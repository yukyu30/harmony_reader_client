import { useSession, signIn, signOut } from 'next-auth/react';
import { Text, HStack, Image, Button, css, VStack, Box } from '@kuma-ui/core';
import Popover from '@/components/Popover';
import { useEffect, useState, useRef } from 'react';

export default function Navigation() {
  const { data: session } = useSession();
  const [OpenMenuPopover, setOpenMenuPopover] = useState(false);
  const avatarRef = useRef<HTMLImageElement>(null);
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
    <>
      <HStack justify="space-between" alignItems="center" gap={8} paddingX={8}>
        <Text>Harmony</Text>

        {session && session.user ? (
          <>
            <Image
              variant="avatar"
              src={session.user.image || '/avatar-defalut.png'}
              onClick={() => setOpenMenuPopover(!OpenMenuPopover)}
              ref={avatarRef}
            />
            {OpenMenuPopover && (
              <Popover
                anchorElement={avatarRef}
                position="bottom"
                align="right"
                children={
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
                }
              />
            )}
          </>
        ) : (
          <Button variant="transparent" onClick={() => signIn()}>
            Log In
          </Button>
        )}
      </HStack>
      <hr></hr>
    </>
  );
}
