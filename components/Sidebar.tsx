"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGrid, FiList, FiDollarSign, FiSettings } from "react-icons/fi";
const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: FiGrid },
  { href: "/dashboard/skills", label: "Skills", icon: FiList },
  { href: "/dashboard/invoices", label: "Invoices", icon: FiDollarSign },
  { href: "/dashboard/settings", label: "Settings", icon: FiSettings },
];
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-gray-800 p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Admin</h2>
      <nav className="space-y-2">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 ${
              pathname === href ? "bg-orange-500 text-white" : "text-gray-300"
            }`}
          >
            <Icon className="mr-3" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
