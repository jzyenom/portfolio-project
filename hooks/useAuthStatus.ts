// hooks/useAuthStatus.ts
"use client";

import { useEffect, useState } from "react";

export function useAuthStatus() {
  const [role, setRole] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sync = () => {
      const token = localStorage.getItem("token");
      const userRole = localStorage.getItem("role");
      setRole(userRole);
      setIsLoggedIn(!!token);
    };

    sync();
    window.addEventListener("authChanged", sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("authChanged", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return { role, isLoggedIn };
}

export function useIsAdmin() {
  const { role } = useAuthStatus();
  return role === "admin";
}