'use client';
import { useSession } from 'next-auth/react';
import Navigation from './components/Navigation';

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div>
      <Navigation />
    </div>
  );
}
