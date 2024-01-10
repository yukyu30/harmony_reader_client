import { useSession, signIn, signOut } from 'next-auth/react';
import { HStack, Image, Button } from '@kuma-ui/core';

export default function Component() {
  return (
    <Button variant="transparent" onClick={() => signIn()}>
      Log In
    </Button>
  );
}
