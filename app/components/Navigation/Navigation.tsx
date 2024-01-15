import { useSession, signIn, signOut } from 'next-auth/react';
import { Text, HStack, Image, Button, VStack, k, Box } from '@kuma-ui/core';
import Popover from '@/components/Popover';
import { useEffect, useState, useRef } from 'react';
import Skeleton from '@/components/Skeleton';

export default function Navigation() {
  const { data: session, status } = useSession();
  const [OpenMenuPopover, setOpenMenuPopover] = useState(false);
  const avatarRef = useRef<HTMLImageElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        parentRef.current &&
        !parentRef.current.contains(event.target as Node)
      ) {
        setOpenMenuPopover(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const user = session?.user;

  return (
    <>
      <HStack justify="space-between" alignItems="center" gap={8} paddingX={8}>
        <Text>Harmony</Text>
        <div ref={parentRef}>
          {status === 'loading' ? (
            <Box padding={3}>
              <Skeleton width="40px" height="40px" borderRadius="radii.full" />
            </Box>
          ) : user ? (
            <>
              <Image
                width={40}
                height={40}
                variant="avatar"
                src={user.image || '/avatar-defalut.png'}
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
        </div>
      </HStack>
      <k.hr
        border={0}
        borderTop={'1px solid'}
        borderColor="colors.light-light"
      ></k.hr>
    </>
  );
}
