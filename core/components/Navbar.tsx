"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
           MUSHROOM STORE
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md px-3 py-1"
            />

            {/* Cart Icon */}
            <Link href="/cart" className="relative">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l2 13h11l2-9H6"
                />
              </svg>

            </Link>

            {/* Login */}
            <Link
              href="/login"
              className="bg-black text-white px-4 py-1 rounded-md"
            >
              Login
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">

          <Link href="/" className="block">
            Home
          </Link>

          <Link href="/products" className="block">
            Products
          </Link>

          <Link href="/cart" className="block">
            Cart
          </Link>

          <Link href="/login" className="block">
            Login
          </Link>

        </div>
      )}

    </nav>
  );
}