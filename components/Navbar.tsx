"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, role, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderAuthButton = () =>
    isLoggedIn ? (
      <button
        onClick={logout}
        className="px-10 py-2 rounded-full hover:border-2 hover:border-red-500 hover:text-red-500 bg-red-500 text-white hover:bg-transparent transition-colors ease-in-out font-semibold"
      >
        Logout
      </button>
    ) : (
      <Link
        href="/login"
        className="px-10 py-2 rounded-full border-2 border-myred-500 text-myred-500 hover:bg-myred-500 hover:text-white transition-colors font-semibold"
      >
        Login
      </Link>
    );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* ✅ Fluid navbar container */}
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
        {/* Logo */}
        <Image src="/logo.svg" alt="Logo" width={96} height={24} className="h-6 w-auto" />

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 items-center text-base">
          <Link href="#home" className="hover:text-[#f59794] transition-colors">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-[#f59794] transition-colors">
            Portfolio
          </Link>
          <Link href="#about" className="hover:text-[#f59794] transition-colors">
            About Me
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#f59794] transition-colors"
          >
            Contact
          </Link>
          {role === "admin" && (
            <Link
              href="/admin"
              className="hover:text-[#f59794] transition-colors"
            >
              Admin
            </Link>
          )}
        </nav>

        {/* Theme Toggle + Auth Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {renderAuthButton()}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 w-full">
          <Link
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#f59794] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#f59794] transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#f59794] transition-colors"
          >
            About Me
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#f59794] transition-colors"
          >
            Contact
          </Link>
          {role === "admin" && (
            <Link
              href="/admin"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#f59794] transition-colors"
            >
              Admin
            </Link>
          )}
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            {renderAuthButton()}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
