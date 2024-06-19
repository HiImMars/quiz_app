import { FC, useEffect, useState } from "react";
import { Quiz } from "./components/Quiz";
import { IQuestion } from "./types/questions";

const App: FC = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className=" min-h-screen flex items-center justify-center">
      {questions.length > 0 ? (
        <Quiz questions={questions} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
