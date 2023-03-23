import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Start from "@/components/start";
import questionList from "@/Consts/questions";
import QuestionComponent from "../components/questioncomponent";
import Results from "@/components/results";

export default function Home() {
  const [onHome, setonHome] = useState(true);
  const [questionNum, setQuestionNum] = useState(0);
  const [qList, setqList] = useState(questionList);
  const [onResults, setonResults] = useState(false);
  if (questionNum >= qList.length || onResults) {
    return (
      <main className="relative">
        <AnimatePresence>
          <Results qList={questionList} />
        </AnimatePresence>
      </main>
    );
  }

  return (
    <main className="relative ">
      <AnimatePresence>
        {onHome ? (
          <div
            className="
             top-0 bottom-0 left-0 right-0 m-auto absolute"
            key="start"
          >
            <Start setOnResults={setonResults} setHome={setonHome} />
          </div>
        ) : (
          <div key="question">
            <QuestionComponent
              qList={qList}
              setQList={setqList}
              setQuestionNum={setQuestionNum}
              questionNum={questionNum}
            />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
