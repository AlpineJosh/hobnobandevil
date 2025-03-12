"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface QuestionProps {
  question: string;
  options: string[];
  answer: number | string;
  explanation: string;
  color: "blue" | "pink" | "purple" | "yellow" | "aqua";
}

const colors = {
  blue: "bg-blue",
  pink: "bg-pink",
  purple: "bg-purple",
  yellow: "bg-yellow",
  aqua: "bg-aqua",
};

const cardVariants = {
  flat: {
    rotateY: 0,
    scale: [1, 1.1, 1],
    boxShadow: ["0 20px 30px rgba(0,0,0,0.2)", "0 40px 60px rgba(0,0,0,0.3)", "0 20px 30px rgba(0,0,0,0.2)"],
    zIndex: [1, 2, 1],
  },
  flipping: {
    rotateY: 180,
    scale: [1, 1.1, 1],
    boxShadow: ["0 20px 30px rgba(0,0,0,0.2)", "0 40px 60px rgba(0,0,0,0.3)", "0 20px 30px rgba(0,0,0,0.2)"],
    zIndex: [1, 2, 1],
  },
};

export default function Question({
  question,
  options,
  answer,
  explanation,
  color,
}: QuestionProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={isFlipped ? "flipping" : "flat"    }
      animate={isFlipped ? "flipping" : "flat"}
      variants={cardVariants}
      transition={{
        duration: 1,
        times: [0, 0.4, 1],
        stiffness: 400,
        damping: 30,
      }}
      className="grid text-white relative"
      style={{
        perspective: 1500,
        transformStyle: "preserve-3d",
        gridTemplateAreas: '"card"',
      }}
    >
      {/* Front side (Question) */}
      <motion.div
        className={`${colors[color]} p-6 backface-hidden flex flex-col`}
        style={{
          transform: "rotateY(0deg)",
          gridArea: "card",
        }}
      >
        <h2 className="not-underlined">{question}</h2>
        <ol className="mt-6 list-[upper-alpha] pl-4 space-y-2">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => setIsFlipped(true)}
              className="cursor-pointer hover:text-white/75"
            >
              {option}
            </li>
          ))}
        </ol>
      </motion.div>

      {/* Back side (Answer) */}
      <motion.div
        className={`${colors[color]} p-6 backface-hidden flex flex-col`}
        style={{
          transform: "rotateY(180deg)",
          gridArea: "card",
        }}
      >
        <h2 className="not-underlined">
          Answer: {typeof answer === "string" ? answer : options[answer]}
        </h2>
        <p className="mt-4">{explanation}</p>
      </motion.div>
    </motion.div>
  );
}
