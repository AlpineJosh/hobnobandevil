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
      <body className="bg-neutral min-h-screen">
        <Background />
        <div className="grid grid-cols-12 gap-5 w-full max-w-screen-xl mx-auto">
          <header className="relative col-span-12 grid grid-cols-12 gap-5 items-center justify-between">
            <Link href="/" className="col-span-2 sm:m-8 not-underlined">
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
            <Menu active={active ?? "home"} className="col-[3/12]" />
          </header>
          <main className="bg-white col-start-2 col-span-10 p-4 sm:p-12">
            {children}
          </main>
          <footer className="col-span-12 text-purple my-24">
            <p className="text-center">
              Website made by Hobnob, with a lot of encouragement from Evil
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
