import questionList from "@/Consts/questions";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Props = {};

export default function TypedHeading({}: Props) {
  const colors = ["red", "green", "blue"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const currentColor = colors[colorIndex % colors.length];

  const currentPhrase =
    "How many Americans " +
    questionList[phraseIndex % questionList.length].group +
    "?";
  const questionPhrase = useEffect(() => {
    const intervalId = setInterval(() => {
      setPhraseIndex((phraseIndex) => (phraseIndex + 1) % questionList.length);
      setColorIndex((colorIndex) => (colorIndex + 1) % colors.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  return (
    <motion.h1
      //className="text-[5rem] font-semibold "
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`text-${currentColor} font-bold  text-[5rem]`}
      //initial={{ y: -100, opacity: 0 }}
      //animate={{ y: 0, opacity: 1 }}
      //transition={{ delay: 0.5 }}
    >
      <motion.span
        className={`inline-block ${currentColor}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        How many Americans
        {questionList[phraseIndex].group.split(" ").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
          >
            {`${char + " "}  `}
          </motion.span>
        ))}
      </motion.span>
    </motion.h1>
  );
}
