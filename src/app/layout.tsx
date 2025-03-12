"use client";

import "./globals.css";
import { Quicksand } from "next/font/google";
import Menu from "../components/Menu";
import { motion } from "framer-motion";
import { SVGPaths } from "../components/SVGPaths";
import Link from "next/link";
import { Background } from "@/components/Background";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

interface LayoutProps {
  children: React.ReactNode;
  active?: "home" | "getting-there" | "sleeping" | "faq" | "quiz" | "rsvp";
}

export default function Layout({ children, active }: LayoutProps) {
  return (
    <html className={`${quicksand.variable}`}>
      <body className="bg-neutral min-h-screen py-6">
        <Background />
        <div className="grid grid-cols-24 w-full max-w-screen-xl mx-auto gap-y-12">
          <header className="relative col-[1/24] grid grid-cols-subgrid items-center">
            <Link href="/" className="col-[2/7] sm:col-[1/4] not-underlined">
              <motion.svg
                key="header-logo"
                viewBox={SVGPaths.Logo.viewBox}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="logo-gradient">
                    <stop offset="0%" stopColor="var(--color-aqua)" />
                    <stop offset="25%" stopColor="var(--color-blue)" />
                    <stop offset="50%" stopColor="var(--color-purple)" />
                    <stop offset="75%" stopColor="var(--color-pink)" />
                    <stop offset="100%" stopColor="var(--color-yellow)" />
                  </linearGradient>
                </defs>
                <motion.path
                  className="fill-none stroke-4"
                  style={{
                    stroke: "url(#logo-gradient)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                  d={SVGPaths.Logo.path}
                />
              </motion.svg>
            </Link>
            <Menu active={active ?? "home"} className="col-[-4/-1] sm:col-[4/24]" />
          </header>
          <main className="bg-white col-[2/-2] grid grid-cols-subgrid py-6 sm:py-12 isolate z-0 shadow">
            <div className="col-[2/-2] grid grid-cols-subgrid gap-y-6 sm:gap-y-12 items-start">
              {children}
            </div>
          </main>
          <footer className="col-[3/-3] text-purple">
            <p className="text-center">
              Website made by Hobnob<br />with a lot of encouragement from Evil
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
