import { AnimatePresence, motion } from "framer-motion";
import Question from "@/Types/Question";
import React, { useState } from "react";
import Slider from "@/components/Slider/slider";

type Props = {
  setQuestionNum: any;
  questionNum: number;
  qList: Question[];
  setQList: any;
};

export default function QuestionComponent({
  setQuestionNum,
  questionNum,
  qList,
  setQList,
}: Props) {
  const question = qList[questionNum];
  const [userGuess, setUserGuess] = useState<number | null>(null);
  //const [guessMade, setGuessMade] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        layoutId={`questionNum${questionNum}`}
        key={`questionNum${questionNum}`}
        className="px-4 pt-8 flex flex-col top-0 bottom-0 left-0 right-0 m-auto absolute

        "
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: "-100%" }}
      >
        <h2 className="text-center text-2xl">
          {`What percent of Americans `}
          <span className="underline"> {question.group}</span>?
        </h2>
        <Slider
          userGuess={userGuess}
          question={question}
          setUserGuess={setUserGuess}
        />
        <div className="flex justify-items-center w-min mx-auto mt-36">
          <h2>Your guess:</h2>
          <input
            type={"number"}
            value={userGuess ?? 50}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (Number.isNaN(val)) {
                setUserGuess(0);
                return;
              }
              if (val > 100) {
                setUserGuess(100);
                return;
              }
              if (val < 0) {
                setUserGuess(0);
                return;
              }
              setUserGuess(val);
            }}
            disabled={question.userGuessPercent !== null}
            className=" bg-gray-200 mx-2"
          ></input>
        </div>
        <button
          onClick={() => {
            setQList((prevQList: Question[]) => {
              const updatedQList = [...prevQList];
              updatedQList[questionNum].userGuessPercent = userGuess;
              return updatedQList;
            });
          }}
        >
          Guess
        </button>
        <button
          onClick={() => {
            setQuestionNum((prevNum: number) => prevNum + 1);
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            setQuestionNum(qList.length);
          }}
        >
          Results
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
