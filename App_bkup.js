import React, { useState, useEffect } from 'react';
import './App.css';
import questionsData from './data/questions.json';

function App() {
  const [questions, setQuestions] = useState({});
  const [currentState, setCurrentState] = useState('start');
  const [endMessage, setEndMessage] = useState('');

  useEffect(() => {
    // Load questions from JSON
    setQuestions(questionsData);
  }, []);

  const currentQuestion = questions[currentState];

  const handleOptionClick = (option) => {
    const nextState = currentQuestion?.next?.[option];
    if (nextState && questions[nextState]) {
      setCurrentState(nextState);
    } else {
      setEndMessage("Thank you for sharing. Take a deep breath and reflect.");
    }
  };

  if (!currentQuestion && !endMessage) return <div className="app">Loading...</div>;

  return (
    <div className="app">
      <div className="question-container">
        <h2>{endMessage || currentQuestion.question}</h2>
        {endMessage ? (
          <div className="end-message">{endMessage}</div>
        ) : (
          <div className="options">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className="option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

