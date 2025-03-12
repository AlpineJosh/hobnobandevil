"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  active: "home" | "getting-there" | "sleeping" | "faq" | "quiz" | "rsvp";
  className?: string;
}

export default function Menu({ active, className }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className={`z-10 min-w-content flex flex-row justify-start items-center ${className}`}>
      <button
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="main-menu"
        onClick={() => setIsOpen(!isOpen)}
        className="relative md:hidden z-50"
      >
        <svg viewBox="0 0 24 24" className="size-12 overflow-visible transform-box-[fill-box]">
          <motion.rect
            y="4"
            width="24"
            height="2"
            style={{ originX: '12px', originY: '5px' }}
            className="fill-yellow"
            animate={{
              rotate: isOpen ? 45 : 0,
              translateY: isOpen ? 3.5 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.rect
            y="11"
            width="24"
            height="2"
            style={{ originX: '12px', originY: '12px' }}
            className="fill-pink"
            animate={{
              rotate: isOpen ? -45 : 0,
              translateY: isOpen ? -3.5 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.rect
            y="18"
            width="24"
            height="2"
            style={{ originX: '12px', originY: '19px' }}
            className="fill-blue"
            animate={{
              translateY: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="main-menu"
            className="z-30 fixed inset-0 h-screen w-screen md:hidden"
            initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
            animate={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
            exit={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              className="bg-purple h-full w-[calc(78vw)] px-12 py-32"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col space-y-10 text-2xl font-semibold text-white">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/wedding">The Wedding</Link>
                </li>
                <li>
                  <Link href="/getting-there">Getting There</Link>
                </li>
                <li>
                  <Link href="/sleeping">Sleeping</Link>
                </li>
                <li>
                  <Link href="/faq">FAQs</Link>
                </li>
                <li>
                  <Link href="/quiz">A Quiz</Link>
                </li>
                <li>
                  <Link href="/rsvp">RSVP</Link>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop menu */}
      <nav className="hidden md:block min-w-content">
        <ul className="min-w-content flex flex-row space-x-8 justify-end text-2xl font-semibold">
          <li>
            <Link
              href="/wedding"
              className={`md:text-aqua md:hover:underlined ${
                active === "home" ? "md:underlined" : ""
              }`}
            >
              The Wedding
            </Link>
          </li>
          <li>
            <Link
              href="/getting-there"
              className={`md:text-blue md:hover:underlined ${
                active === "getting-there" ? "md:underlined" : ""
              }`}
            >
              Getting There
            </Link>
          </li>
          <li>
            <Link
              href="/sleeping"
              className={`md:text-purple md:hover:underlined ${
                active === "sleeping" ? "md:underlined" : ""
              }`}
            >
              Sleeping
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className={`md:text-pink md:hover:underlined ${
                active === "faq" ? "md:underlined" : ""
              }`}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              href="/quiz"
              className={`md:text-yellow md:hover:underlined ${
                active === "quiz" ? "md:underlined" : ""
              }`}
            >
              A Quiz
            </Link>
          </li>
          <li>
            <Link
              href="/rsvp"
              className={`md:text-aqua md:hover:underlined ${
                active === "rsvp" ? "md:underlined" : ""
              }`}
            >
              RSVP
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
