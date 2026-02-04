"use client";
import { signOut, useSession } from "next-auth/react";
export default function Topbar() {
  const { data: session } = useSession();
  return (
    <header className="bg-gray-900 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Panel</h1>
      <div className="flex items-center gap-4">
        <span>{session?.user?.name}</span>
        <button
          onClick={() => signOut()}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
