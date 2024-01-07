'use client';
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';
import Logout from '@/components/Logout';

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div>
      <Login />
    </div>
  );
}
