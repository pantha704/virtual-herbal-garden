import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },
      authorize(credentials: any) {
        const phone = credentials.phone;
        const pass = credentials.pass;
        console.log({
          phone: phone,
          pass: pass,
          message: "Credentials aren't ready for use yet",
        });

        return null;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",

  callbacks: {
    async session({ token, session }: any) {
      session.user.id = token.sub;

      return session;
    },
  },
};
