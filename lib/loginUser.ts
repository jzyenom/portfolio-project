import { ILoginInput } from "@/types/auth";

export const loginUser = async (user: ILoginInput) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user), // ✅ Send the login payload
  });

  // Attempt to parse JSON safely
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Invalid server response");
  }

  if (!response.ok) {
    throw new Error(data?.error || "Login failed");
  }

  return data;
};
