/**
 * Maneja la ruta de autenticación.
 * @returns {NextAuth} El controlador NextAuth.
 */
import NextAuth from "next-auth";

import { authOptions } from "@/libs/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
