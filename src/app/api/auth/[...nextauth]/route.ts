/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
import CognitoProvider from 'next-auth/providers/cognito';

const handler = NextAuth({
  providers: [
    CognitoProvider({
      clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET || '',
      issuer: process.env.NEXT_PUBLIC_COGNITO_ISSUER || '',
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        if (account.provider === 'cognito') {
          token.accessToken = account?.access_token;
          if (account.id_token) {
            const tokenParsed = JSON.parse(
              Buffer.from(account.id_token.split('.')[1], 'base64').toString()
            );
            token.username = tokenParsed['cognito:username'];
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.username = token.username;

      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
});

export { handler as GET, handler as POST };
