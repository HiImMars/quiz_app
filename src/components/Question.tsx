import { FC, useEffect, useState } from "react";
import { IQuestion } from "../types/questions";

interface QuestionProps {
  item: IQuestion;
  onAnswerSelected: (isCorrect: boolean) => void;
}

export const Question: FC<QuestionProps> = ({ item, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  console.log(selectedAnswer);
  useEffect(() => {
    setSelectedAnswer(null);
  }, [item]);

  const handleAnswerClick = (index: number, isCorrect: boolean) => {
    setSelectedAnswer(index);
    onAnswerSelected(isCorrect);
  };

  const { question, answers } = item || {};

  return (
    <div className="mb-8">
      <p className="text-lg font-medium mb-6">{question}</p>
      <div className="grid grid-cols-1 gap-4">
        {Boolean(answers?.length) &&
          answers.map((answer, index) => (
            <button
              key={index}
              className={`p-4 rounded-md text-left transition-colors ${
                selectedAnswer !== null && selectedAnswer === index
                  ? answer.isCorrect
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }
                `}
              onClick={() => handleAnswerClick(index, answer.isCorrect)}
              disabled={selectedAnswer !== null}
            >
              {answer.text}
            </button>
          ))}
      </div>
    </div>
  );
};
