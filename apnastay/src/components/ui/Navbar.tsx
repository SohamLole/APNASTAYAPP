"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "rgba(248,250,252,0.9)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          <span className="bg-gradient bg-clip-text text-transparent">
            APNASTAY
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm text-[var(--text-secondary)]">
          <Link href="/explore">Explore</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link
            href="/auth/login"
            className="px-6 py-3 rounded-xl text-white bg-gradient shadow-md hover:shadow-lg transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
