import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileSidebar from "./components/mobile-sidebar";
import ResumeButton from "./components/resume-button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Xinzhe Xu",
  description: "Portfolio of Xinzhe Xu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-linear-to-br from-neutral-50 via-white to-neutral-50">
        {/* desktop menu/header */}
        <header className="sticky top-0 z-40 border-b bg-linear-to-br from-neutral-50 via-white to-neutral-50 backdrop-blur-md">
          <div className="mx-auto max-w-full px-6 py-4 md:px-12">
            <div className="flex items-center justify-between gap-8">
              {/* Left side of header */}
              <Link
                href={"/"}
                className="font-bold text-2xl text-neutral-900 hover:text-neutral-700 transition-colors duration-200"
              >
                Xinzhe Xu
              </Link>

              {/* Right Side - Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href={"/#about"}
                  className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200 relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
                </Link>

                <Link
                  href={"/#education"}
                  className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200 relative group"
                >
                  Education
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
                </Link>

                <Link
                  href={"/#projects"}
                  className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200 relative group"
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
                </Link>

                <Link
                  href={"/#contact"}
                  className="text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-200 relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <div className="md:pl-0">
          {/* Main content */}
          {children}
        </div>

        <MobileSidebar />
      </body>
    </html>
  );
}
