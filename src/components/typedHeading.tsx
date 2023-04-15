import questionList from "@/Consts/questions";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const colors = ["text-red-500", "text-blue-500", "text-green-500"];

const TypedHeading = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [color, setColor] = useState(colors[phraseIndex % colors.length]);

  useEffect(() => {
    const currentPhrase = questionList[phraseIndex];
    const phraseText = currentPhrase.group;
    //const { text: phraseText, color: phraseColor } = currentPhrase;
    const interval = setInterval(() => {
      const letter = phraseText[text.length];
      if (letter === undefined) {
        // Phrase is complete, move on to the next one
        setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % questionList.length);
          setText("");
        }, 3000);
        clearInterval(interval); // Stop the interval when the phrase is complete
      } else {
        // Add the next letter to the text
        setText((prev) => prev + letter);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [phraseIndex, text]);

  useEffect(() => {
    //const currentPhrase = questionList[phraseIndex];
    const phraseColor = colors[phraseIndex % colors.length];
    //const { color: phraseColor } = currentPhrase;
    setColor(phraseColor);
    setText("");
  }, [phraseIndex]);

  const handleTransitionEnd = () => {
    console.log("End");
    // Add a delay before resetting the text
    setTimeout(() => {
      setText("");
    }, 3000);
  };

  return (
    <div className="text-[3rem] md:text-[4rem] px-2 absolute text-gray-800 font-bold">
      How many Americans{" "}
      <motion.span
        className={`${color} font-bold`}
        style={{ display: "inline-block", textAlign: "center" }}
        onTransitionEnd={() => {}}
        //animate={{ width: ["0", "100%"] }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {text}
      </motion.span>
      ?
    </div>
  );
};
export default TypedHeading;
