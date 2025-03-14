"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  active?: "home" | "wedding" | "getting-there" | "sleeping" | "faq" | "quiz" | "rsvp";
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
    <div className={`z-10 min-w-content flex flex-row justify-start sm:justify-end items-center ${className}`}>
      <button
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="main-menu"
        onClick={() => setIsOpen(!isOpen)}
        className="relative md:hidden z-50"
      >
        <motion.svg 
          viewBox="0 0 24 24" 
          className="size-12 overflow-visible transform-box-[fill-box]"
          variants={{
            initial: {
              transition: { staggerChildren: 0.2, duration: 0.6 }
            },
            animate: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="initial"
          animate="animate"
        >
          {[
            { y: 4, className: "fill-yellow" },
            { y: 11, className: "fill-pink" },
            { y: 18, className: "fill-blue" }
          ].map(({ y, className }, index) => (
            <motion.rect
              key={y}
              y={y}
              width="24"
              height="2"
              style={{ originX: '12px', originY: `${y + 1}px` }}
              className={className}
              variants={{
                initial: {
                  x: 100,
                  opacity: 0
                },
                animate: {
                  x: 0,
                  opacity: 1,
                  rotate: isOpen && index !== 2 ? (index === 0 ? 45 : -45) : 0,
                  translateY: isOpen ? (index === 0 ? 3.5 : index === 1 ? -3.5 : 1) : 0
                }
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.svg>
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
              <motion.ul 
                className="flex flex-col space-y-10 text-2xl font-semibold text-white"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2, // Delay after nav slides in
                    }
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1
                    }
                  }
                }}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {[
                  { href: "/", text: "Home" },
                  { href: "/wedding", text: "The Wedding" },
                  { href: "/getting-there", text: "Getting There" },
                  { href: "/sleeping", text: "Sleeping" },
                  { href: "/faq", text: "FAQs" },
                  { href: "/quiz", text: "A Quiz" },
                  { href: "/rsvp", text: "RSVP" },
                ].map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 }
                    }}
                  >
                    <Link href={item.href}>{item.text}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop menu */}
      <nav className="hidden md:block min-w-content">
        <motion.ul 
          className="min-w-content flex flex-row space-x-8 justify-end text-2xl font-semibold"
          variants={{
            open: {
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          initial="closed"
          animate="open"
        >
          {[
            { href: "/wedding", text: "The Wedding", color: "text-aqua", isActive: active === "wedding" },
            { href: "/getting-there", text: "Getting There", color: "text-blue", isActive: active === "getting-there" },
            { href: "/sleeping", text: "Sleeping", color: "text-purple", isActive: active === "sleeping" },
            { href: "/faq", text: "FAQs", color: "text-pink", isActive: active === "faq" },
            { href: "/quiz", text: "A Quiz", color: "text-yellow", isActive: active === "quiz" },
            { href: "/rsvp", text: "RSVP", color: "text-aqua", isActive: active === "rsvp" },
          ].map((item) => (
            <motion.li
              key={item.href}
              variants={{
                open: { opacity: 1, y: 0, transition: { duration: 1 } },
                closed: { opacity: 0, y: -40, transition: { duration: 1 } }
              }}
            >
              <Link
                href={item.href}
                className={`${item.color} md:hover:underlined ${
                  item.isActive ? "md:underlined" : "md:not-underlined"
                }`}
              >
                {item.text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
}
