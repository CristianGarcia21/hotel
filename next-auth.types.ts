/**
 * Extends the Session interface from the "next-auth" module.
 * Adds a "user" property to the Session interface with an "id" field.
 */
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}
