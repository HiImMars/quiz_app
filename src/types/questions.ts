export interface IAnswers {
  text: string;
  isCorrect: boolean;
}

export interface IQuestion {
  question: string;
  answers: IAnswers[];
}
