import React, { useState } from "react";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/admin/requests", label: "Admin Table" },
    { href: "/requestsList", label: "User Requests" },
    { href: "/request", label: "New Request" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <img
            className="h-12 block dark:hidden"
            src="/logo.png"
            alt="Supportly Logo"
          />
          <img
            className="h-12 hidden dark:block"
            src="/logo-dark.png"
            alt="Supportly Logo Dark"
          />
        </Link>

        <nav className="hidden md:flex md:ml-auto md:mr-auto space-x-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-gray-400 dark:text-white transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link
            href="#"
            className="flex items-center rounded-full border-2 border-gray-600 px-5 py-1 text-gray-500 dark:text-white dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            <IconArrowRight size={16} className="mr-2" />
            Sign In
          </Link>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <IconMenu2 size={24} />
          </button>
        </div>

        {/* ********Mobile Menu */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 shadow-lg md:hidden`}
        >
          <div className="p-5 flex justify-between items-center">
            <Link href="/">
              <img
                className="h-10 block dark:hidden"
                src="/logo.png"
                alt="Supportly Logo"
              />
              <img
                className="h-10 hidden dark:block"
                src="/logo-dark.png"
                alt="Supportly Logo Dark"
              />
            </Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <IconX size={24} className="text-gray-600 dark:text-white" />
            </button>
          </div>

          <nav className="mt-5 mx-4 space-y-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 dark:text-gray-200 hover:text-gray-100 dark:hover:text-white transition-colors duration-300 py-2"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
