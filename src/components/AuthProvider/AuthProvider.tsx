'use client';

/**
 * Proporciona autenticación utilizando NextAuth.
 * @component
 * @param {Object} props - Las props del componente.
 * @param {React.ReactNode} props.children - Los componentes hijos.
 * @returns {JSX.Element} El componente renderizado.
 */

import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};