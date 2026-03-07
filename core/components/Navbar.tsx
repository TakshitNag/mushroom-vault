"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-green-700 flex items-center gap-2"
          >
            🍄 Sumit Mushroom Farm
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link href="/" className="hover:text-green-600 font-medium">
              Home
            </Link>

            <Link href="/products" className="hover:text-green-600 font-medium">
              Products
            </Link>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search mushrooms..."
                className="border rounded-full pl-4 pr-10 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <span className="absolute right-3 top-2.5 text-gray-500">
                🔍
              </span>
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 hover:text-green-600"
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

              {/* cart count */}
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full">
                0
              </span>

            </Link>

            {/* Login */}
            <Link
              href="/login"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              Login
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white border-t">

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