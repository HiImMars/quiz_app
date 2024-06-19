import { FC, useState } from "react";
import { Question } from "./Question";
import { IQuestion } from "../types/questions";

interface QuizProps {
  questions: IQuestion[];
}

export const Quiz: FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [scoreShown, setScoreShown] = useState(false);

  const handleAnswerSelected = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectCount((prevCount) => prevCount + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setScoreShown(true);
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-md">
      <h1 className="text-lg text-teal-600 font-bold mb-2">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h1>
      <div className="w-full h-0.25 bg-gray-400"></div>
      <Question item={question} onAnswerSelected={handleAnswerSelected} />
      {!scoreShown && (
        <button
          onClick={handleNext}
          className="bg-teal-600 py-2 px-4 mb-6 text-white text-lg rounded-md hover:bg-teal-500 focus:bg-teal-500 transition-colors"
        >
          Next
        </button>
      )}
      {scoreShown && (
        <div className="mt-4">
          <p className="font-bold">
            Number of correct answers out of {questions.length}:
          </p>
          <p className="text-lg">{correctCount}</p>
        </div>
      )}
    </div>
  );
};
