import { cookies } from "next/headers";

export function setAuthCookie(token: string) {
  cookies().set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60,
  });
}

export function deleteAuthCookie() {
  cookies().delete("token");
}
