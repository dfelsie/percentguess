import Question from "@/Types/Question";
import React, { useEffect } from "react";
import localStyles from "./slider.module.css";

type Props = {
  setUserGuess: any;
  question: Question;
  showResults?: boolean;
  userGuess: number | null;
};

export default function Slider({
  setUserGuess,
  question,
  showResults,
  userGuess,
}: Props) {
  useEffect(() => {
    setUserGuess(50);
  }, []);
  const showDots = question.userGuessPercent !== null || showResults;
  const userGuessCloseToEstimated =
    question.userGuessPercent !== null &&
    Math.abs(question.userGuessPercent - question.guessedPercent) < 5;

  return (
    <div className="relative mt-4">
      {showDots && (
        <div
          style={{ left: `calc(${question.actualPercent}% - 10px)` }}
          className="absolute w-4 h-4 bg-red-500 rounded-full"
        >
          <div className="ml-3 absolute bottom-full left-1/2 transform -translate-x-1/2">
            <span className="text-md font-bold text-red-500 mt-[-2rem]">
              {`True percent: ${question.actualPercent}%`}
            </span>
          </div>
        </div>
      )}
      {showDots && (
        <div
          style={{
            left: `calc(${question.guessedPercent}% - 10px)`,
          }}
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
        >
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <span className="text-md font-bold text-blue-500">
              {`Estimated percent: ${question.guessedPercent}%`}
            </span>
          </div>
        </div>
      )}
      {question.userGuessPercent !== null && (
        <div
          style={{
            left: `calc(${question.userGuessPercent}% - 10px)`,
          }}
          className="absolute w-4 h-4 bg-purple-500 rounded-full "
        >
          <div
            className={`absolute top-full left-1/2 transform -translate-x-1/2 ${
              userGuessCloseToEstimated ? "mt-[75px]" : ""
            }`}
          >
            <span className=" ml-[12px] block text-md font-bold text-purple-500">
              {`Your guess: ${question.userGuessPercent}%`}
            </span>
          </div>
        </div>
      )}
      <input
        className={` mx-auto mt-[-2px]  w-full ${
          showDots ? localStyles["hideSlide"] : ""
        }`}
        onInput={() => setUserGuess}
        type={"range"}
        min="1"
        max="100"
        step="1"
        value={userGuess ?? 50}
        onChange={(e) => {
          setUserGuess(parseInt(e.target.value));
        }}
        disabled={showResults || question.userGuessPercent !== null}
      ></input>
    </div>
  );
}
