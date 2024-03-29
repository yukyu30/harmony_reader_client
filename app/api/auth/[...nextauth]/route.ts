import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { Session, User } from 'next-auth';
import * as jose from 'jose';
import { JWT } from 'next-auth/jwt';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
  ],
  callbacks: {
    session: async ({
      session,
      token,
    }: {
      session: Session;
      user: User;
      token: JWT;
    }) => {
      if (token.sub != null) {
        const payload = {
          sub: token.sub,
          email: token.email,
        };

        const secret = new TextEncoder().encode(String(process.env.JWT_SECRET));
        const alg = 'HS256';

        const accessToken = await new jose.SignJWT(payload)
          .setProtectedHeader({ alg })
          .setExpirationTime(process.env.JWT_EXPIRATION_TIME || '30d')
          .setJti(String(token.jti))
          .sign(secret);

        return Promise.resolve({
          ...session,
          accessToken: accessToken,
        });
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
