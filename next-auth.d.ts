import { UserRole, confirmed } from "@prisma/client";
import NextAuth, { User, type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  confirmed: confirmed;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
