import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials for admin",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "enter your email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "enter your password",
        },
      },
      async authorize(credentials) {
        const user = {
          id: "11",
          email: "abdalla@gmail.com",
          password: "Abdallah@123",
        };
        if (
          credentials?.email == user.email &&
          credentials?.password == user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
