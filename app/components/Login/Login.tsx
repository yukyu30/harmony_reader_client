import { useSession, signIn, signOut } from 'next-auth/react';
import { Text, HStack, Image, Button } from '@kuma-ui/core';

export default function Component() {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        <Button variant="transparent" onClick={() => signOut()}>
          <HStack justify="center" alignItems="center" gap={8}></HStack>
        </Button>
        <Image variant="avatar" src={session.user.image} />
      </>
    );
  }
  return (
    <Button variant="transparent" onClick={() => signIn()}>
      Log In
    </Button>
  );
}
