import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Start from "@/components/start";
import questionList from "@/Consts/questions";
import QuestionComponent from "../components/questioncomponent";
import Results from "@/components/results";
import Head from "next/head";

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Home() {
  const [onHome, setonHome] = useState(true);
  const [questionNum, setQuestionNum] = useState(0);
  const [qList, setqList] = useState(questionList);
  const [onResults, setonResults] = useState(false);
  useEffect(() => {
    setqList(shuffle(qList));
  }, []);

  if (questionNum >= qList.length || onResults) {
    return (
      <>
        <Head>
          <title>America Guess</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Profile Page for Daniel Felsenthal"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <main className="relative">
          <AnimatePresence>
            <Results qList={questionList} />
          </AnimatePresence>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>America Guess</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Profile Page for Daniel Felsenthal" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
    </>
  );
}
