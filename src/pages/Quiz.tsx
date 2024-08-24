import React, { useState } from 'react';

const Quiz: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What does ZK stand for?",
      options: ["Zero Knowledge", "Zero Key", "Zebra King"],
      answer: "Zero Knowledge"
    },
  ];

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === questions[questionIndex].answer) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div className="quiz">
      {questionIndex < questions.length ? (
        <div>
          <h2>{questions[questionIndex].question}</h2>
          {questions[questionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
