import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { UserRole } from "@prisma/client";
import { getUserById } from "./db/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  type: "credentials",
  debug: true,
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (token.confirmed && session.user) {
        session.user.confirmed = token.confirmed;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;
      token.confirmed = existingUser.confirmed;
      return token;
    },
  },
  //@ts-ignore
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  //@ts-ignore
  jwt: { secret: process.env.JWT_SECRET },
  ...authConfig,
});
