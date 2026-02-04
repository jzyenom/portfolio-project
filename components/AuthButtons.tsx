// components/AuthButtons.tsx
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function AuthButtons() {
  const { data: session } = useSession();
  return session ? (
    <button onClick={() => signOut()}>Sign out ({session.user.name})</button>
  ) : (
    <button onClick={() => signIn("google")}>Sign in with Google</button>
  );
}
