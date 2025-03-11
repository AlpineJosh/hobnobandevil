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
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.7 }}
      className="grid text-white"
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        gridTemplateAreas: '"card"',
      }}
    >
      {/* Front side (Question) */}
      <motion.div
        className={`${colors[color]} p-6 backface-hidden space-x-2 flex flex-col`}
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
        className={`${colors[color]} p-6 backface-hidden flex flex-col space-x-2`}
        style={{
          transform: "rotateY(180deg)",
          gridArea: "card",
        }}
      >
          <h2 className="not-underlined">Answer: {typeof answer === "string" ? answer : options[answer]}</h2>
          <p>{explanation}</p>
      </motion.div>
    </motion.div>
  );
}
