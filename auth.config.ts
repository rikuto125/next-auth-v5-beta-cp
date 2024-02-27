import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./schemas";
import { getUserByEmail } from "./db/user";

export default {
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        const validatedFields = signInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log("passwordsMatch", user);
          if (passwordsMatch) return user;
        }
        return null;
      },
    }),
  ],
  // MEMO これがないとエラーになる
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
