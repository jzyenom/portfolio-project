// Extend default NextAuth types to include custom fields
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
    };
  }

  interface JWT {
    id?: string;
  }
}
