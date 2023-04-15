import React from "react";
import { motion } from "framer-motion";
import TypedHeading from "./typedHeading";

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
      <TypedHeading />
      {/*       <motion.h1
        className="text-[5rem] font-semibold "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Guess how many Americans are Muslim
      </motion.h1> */}
      <div className="h-[500px] sm:h-[450px] lg:h-[300px] "></div>
      <motion.h2
        className="px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <span className="my-8 block text-xl px-6">
          You will be presented with a trait or characteristic that some
          Americans have, such as owning a pet or holding a college degree. Your
          task is to guess what percentage of Americans you think have this
          trait.
        </span>
        <span className="my-8 block text-xl px-6">
          Once you submit your guess, you will be able to see what other people
          have guessed, as well as the true proportion based on real data.
          You&lsquo;ll quickly realize how off the mark most people are with
          their guesses!
        </span>
      </motion.h2>
      <button
        className="bg-green-700 hover:bg-green-900 text-white font-bold py-4 px-8 rounded w-fit mx-auto text-center my-8"
        onClick={() => setHome(false)}
      >
        Start!
      </button>
      <button
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded  mx-auto text-center my-4 w-fit"
        onClick={() => setOnResults(true)}
      >
        Just show me the results!
      </button>
      <h3 className="mt-8 text-xl">
        Inspired by, and data from{" "}
        <a
          className="text-blue-700 hover:underline"
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
