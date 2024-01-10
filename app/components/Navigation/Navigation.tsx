import { useSession, signIn, signOut } from 'next-auth/react';
import { Text, HStack, Image, Button, css } from '@kuma-ui/core';
import UserMenu from '@/components/UserMenu';

export default function Navigation() {
  const { data: session } = useSession();

  return (
    <HStack justify="space-between" alignItems="center" gap={8} paddingX={8}>
      <Text>Harmony</Text>

      {session && session.user ? (
        <UserMenu avatar={session.user?.image ?? undefined} />
      ) : (
        <Button variant="transparent" onClick={() => signIn()}>
          Log In
        </Button>
      )}
    </HStack>
  );
}
