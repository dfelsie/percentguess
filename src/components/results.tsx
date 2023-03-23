import Question from "@/Types/Question";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Slider from "./Slider/slider";

type Props = {
  qList: Question[];
};

export default function Results({ qList }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        layoutId={`results`}
        key={`resultsScreen`}
        className="px-4 pt-8 flex flex-col top-0 bottom-0 left-0 right-0 m-auto absolute text-center"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: "-100%" }}
      >
        <h1>Results</h1>
        {qList.map(function (val, i) {
          return (
            <div key={`resBox${i}`}>
              <h2
                className="mb-16"
                key={`header${i}`}
              >{`What percent of Americans ${val.group}?`}</h2>
              <Slider
                userGuess={50}
                key={`result${i}`}
                setUserGuess={() => {}}
                question={val}
                showResults={true}
              />
              <div className="my-36" key={`resultSpacer${i}`}></div>
            </div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
