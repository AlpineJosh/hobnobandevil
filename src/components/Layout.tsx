"use client";

import Menu from "../components/Menu";
import { motion, Variant } from "framer-motion";
import { SVGPaths } from "../components/SVGPaths";
import Link from "next/link";
import { Background } from "@/components/Background";
import { useState } from "react";
import { usePathname } from "next/navigation";

const logoVariants: Record<string, Variant> = {
  initial: {
    x: "50cqw",
    y: "50vh",
    translateX: "-50%",
    translateY: "-50%",
    scale: 3,
  },
  final: {
    x: 0,
    y: 0,
    translateX: 0,
    translateY: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.645, 0.045, 0.355, 1],
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const TIMING_MULTIPLIER = 3; // Adjust this to speed up or slow down all animations

const letterVariants = {
  initial: {
    pathLength: 0,
    pathSpacing: 1,
    pathOffset: 0.975,
  },
  j: {
    pathSpacing: 0.81,
    pathLength: 1,
    transition: {
      duration: 0.215 * TIMING_MULTIPLIER * 1.5,
      ease: "easeIn",
    },
  },
  jo: {
    pathSpacing: 0.74,
    pathLength: 1,
    transition: {
      duration: 0.07 * TIMING_MULTIPLIER,
      ease: "linear",
    },
  },
  jos: {
    pathSpacing: 0.58,
    pathLength: 1,
    transition: {
      duration: 0.16 * TIMING_MULTIPLIER * 2,
      ease: "linear",
    },
  },
  josh: {
    pathSpacing: 0.46,
    pathLength: 1,
    transition: {
      duration: 0.12 * TIMING_MULTIPLIER * 1.5,
      ease: "easeOut",
    },
  },
  joshe: {
    pathOffset: 0.725,
    pathSpacing: 0.46 - (0.975 - 0.725),
    pathLength: 1,
    transition: {
      duration: (0.975 - 0.725) * TIMING_MULTIPLIER * 1.5,
      ease: "easeIn",
    },
  },
  joshev: {
    pathOffset: 0.66,
    pathSpacing: 0.46 - (0.975 - 0.66),
    pathLength: 1,
    transition: {
      duration: (0.725 - 0.66) * TIMING_MULTIPLIER,
      ease: "linear",
    },
  },
  josheve: {
    pathOffset: 0.5,
    pathSpacing: 0.46 - (0.975 - 0.5),
    pathLength: 1,
    transition: {
      duration: (0.66 - 0.5) * TIMING_MULTIPLIER * 2,
      ease: "easeOut",
    },
  },
};

const animationSequence = [
  "j",
  "jo",
  "jos",
  "josh",
  "joshe",
  "joshev",
  "josheve",
];

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [animationStep, setAnimationStep] = useState("j");
  const [moveToPosition, setMoveToPosition] = useState(false);

  const pathname = usePathname();

  const active = pathname.split("/").pop() as
    | "home"
    | "wedding"
    | "getting-there"
    | "sleeping"
    | "faq"
    | "quiz"
    | "rsvp";

  return (
    <body className={`bg-neutral min-h-screen py-6 font-sans`}>
      <Background />
      <div className="grid grid-cols-24 w-full max-w-screen-xl mx-auto gap-y-12">
        <header className="relative @container col-[1/24] grid grid-cols-subgrid items-center z-10">
          <Link href="/" className="col-[2/7] sm:col-[1/4] not-underlined">
            <motion.svg
              key="header-logo"
              viewBox={SVGPaths.Logo.viewBox}
              preserveAspectRatio="xMidYMid meet"
              variants={logoVariants}
              initial="initial"
              animate={moveToPosition ? "final" : "initial"}
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
                variants={letterVariants}
                initial="initial"
                animate={animationStep}
                onAnimationComplete={() => {
                  const currentIndex = animationSequence.indexOf(
                    animationStep as string
                  );
                  if (currentIndex < animationSequence.length - 1) {
                    setAnimationStep(animationSequence[currentIndex + 1]);
                  } else if (currentIndex === animationSequence.length - 1) {
                    setTimeout(() => {
                      setMoveToPosition(true);
                    }, 500);
                  }
                }}
              />
            </motion.svg>
          </Link>
          {moveToPosition && (
            <Menu active={active} className="col-[-4/-1] sm:col-[4/24]" />
          )}
        </header>
        <motion.main
          initial={{
            y: "100vh",
          }}
          animate={
            moveToPosition
              ? {
                  y: 0,
                }
              : {
                  y: "100vh",
                }
          }
          transition={{
            delay: 0.5,
            duration: 3,
            ease: [0.645, 0.045, 0.355, 1],
            type: "spring",
            enabled: moveToPosition,
          }}
          className="bg-white col-[2/-2] grid grid-cols-subgrid py-6 sm:py-12 isolate z-0 shadow"
        >
          <div className="col-[2/-2] grid grid-cols-subgrid gap-y-6 sm:gap-y-12 items-start">
            {children}
          </div>
        </motion.main>
        <motion.footer className="col-[3/-3] text-purple">
          <p className="text-center">
            Website made by Hobnob
            <br />
            with a lot of encouragement from Evil
          </p>
        </motion.footer>
      </div>
    </body>
  );
};
