/* eslint-disable no-unused-vars */
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      username: string;
      name: string;
      email: string;
      address: string;
      zip: string;
      role: string;
      accessToken: string;
    };
  }
}
