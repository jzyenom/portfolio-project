"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const withAdmin = (Component: any) => {
  return function AdminProtected(props: any) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return;
      if (!session || session.user.role !== "admin") {
        router.push("/");
      }
    }, [session, status]);
    return session?.user.role === "admin" ? <Component {...props} /> : null;
  };
};
