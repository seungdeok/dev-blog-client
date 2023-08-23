import { signIn, useSession, signOut } from 'next-auth/react';

export function useAuthSession() {
  const { data: session } = useSession();

  return { session, signIn, signOut, isLoggedIn: session !== null };
}
