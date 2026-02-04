"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { ComponentType } from "react";
import type { Session } from "next-auth";

type AdminSession = Session & { user: Session["user"] & { role?: string } };

export const withAdmin = <P extends object>(Component: ComponentType<P>) => {
  return function AdminProtected(props: P) {
    const { data: session, status } = useSession() as {
      data: AdminSession | null;
      status: "loading" | "authenticated" | "unauthenticated";
    };
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return;
      if (!session || session.user.role !== "admin") {
        router.push("/");
      }
    }, [router, session, status]);
    return session?.user.role === "admin" ? <Component {...props} /> : null;
  };
};
