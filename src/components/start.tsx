import React from "react";
import { motion } from "framer-motion";

type Props = {
  setHome: (b: boolean) => void;
  setOnResults: (b: boolean) => void;
};

export default function Start({ setHome, setOnResults }: Props) {
  const containerVariants = {
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100vw", transition: { ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="text-center
      overflow-x-hidden
flex flex-col
      "
      variants={containerVariants}
      initial="visible"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-[5rem] font-semibold "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Guess how many Americans are Muslim
      </motion.h1>
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        We often hear about all sorts of groups in America, but just how big are
        they?
      </motion.h2>
      <button onClick={() => setHome(false)}>Start!</button>
      <button onClick={() => setOnResults(true)}>
        Just show me the results!
      </button>
      <h3 className="mt-8">
        Inspired by{" "}
        <a
          className="text-blue-500 hover:underline"
          href={
            "https://today.yougov.com/topics/politics/articles-reports/2022/03/15/americans-misestimate-small-subgroups-population"
          }
        >
          this Yougov article.
        </a>
      </h3>
    </motion.div>
  );
}
