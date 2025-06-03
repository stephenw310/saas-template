import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Google,
    Resend({
      //TODO: change sender domain and verify in resend portal
      from: "no-reply@company.com",
      apiKey: process.env.RESEND_API_KEY,
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
