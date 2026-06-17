"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close sidebar" : "Open sidebar"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="fixed left-4 top-4 z-60 md:hidden rounded-full p-3 bg-white backdrop-blur transition-transform duration-300 ease-out active:scale-95"
      >
        <span
          className={`block h-0.5 w-5 bg-neutral-900 transition-all duration-300 ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`mt-1 block h-0.5 w-5 bg-neutral-900 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`mt-1 block h-0.5 w-5 bg-neutral-900 transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeSidebar}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-neutral-200 bg-white/95 px-5 py-6 shadow-2xl backdrop-blur transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col gap-8">
          <div className="flex items-center justify-between"></div>

          <nav className="flex flex-1 flex-col gap-4 text-lg font-medium text-neutral-800">
            <Link
              href="/"
              onClick={closeSidebar}
              className="rounded-xl px-3 py-2 hover:underline"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={closeSidebar}
              className="rounded-xl px-3 py-2 hover:underline"
            >
              About
            </Link>
            <Link
              href="/#education"
              onClick={closeSidebar}
              className="rounded-xl px-3 py-2 hover:underline"
            >
              Education
            </Link>
            <Link
              href="/#projects"
              onClick={closeSidebar}
              className="rounded-xl px-3 py-2 hover:underline"
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              onClick={closeSidebar}
              className="rounded-xl px-3 py-2 hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
