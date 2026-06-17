"use client";

import { useState } from "react";
import Link from "next/link";
import ResumeButton from "./resume-button";

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
        className="fixed right-4 top-5 z-60 md:hidden rounded-full p-2.5 bg-white/80 backdrop-blur border border-neutral-200/50 shadow-md hover:shadow-lg transition-all duration-300 ease-out active:scale-95"
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
        className={`fixed inset-y-0 right-0 z-50 w-64 border-l border-neutral-200/50 bg-white/80 backdrop-blur-md px-6 py-8 shadow-lg transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col gap-8">

          <nav className="flex flex-1 flex-col gap-3">
            <Link
              href="/"
              onClick={closeSidebar}
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-neutral-100/50"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={closeSidebar}
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-neutral-100/50"
            >
              About
            </Link>
            <Link
              href="/#education"
              onClick={closeSidebar}
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-neutral-100/50"
            >
              Education
            </Link>
            <Link
              href="/#projects"
              onClick={closeSidebar}
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-neutral-100/50"
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              onClick={closeSidebar}
              className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-neutral-100/50"
            >
              Contact
            </Link>
          </nav>

          <div className="flex justify-center pt-4 border-t border-neutral-200/50">
            <ResumeButton size="sm" />
          </div>
        </div>
      </aside>
    </>
  );
}
