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
    {
      question: "What is a key benefit of Zero Knowledge proofs?",
      options: ["Privacy", "Speed", "Scalability"],
      answer: "Privacy"
    },
    {
      question: "Which cryptographic technique is often used in Zero Knowledge proofs?",
      options: ["Elliptic Curve Cryptography", "Hashing", "RSA Encryption"],
      answer: "Elliptic Curve Cryptography"
    },
    {
      question: "Which of the following is a popular Zero Knowledge proof system?",
      options: ["SNARKs", "SHA-256", "Merkle Trees"],
      answer: "SNARKs"
    },
    {
      question: "What does 'non-interactive' mean in the context of Zero Knowledge proofs?",
      options: ["Proof doesn't require back-and-forth communication", "Proof is not cryptographically secure", "Proof is faster to verify"],
      answer: "Proof doesn't require back-and-forth communication"
    }
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
