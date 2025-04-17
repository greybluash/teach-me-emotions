import React, { useState, useEffect } from 'react';
import questionsData from './data/questions.json';
import './App.css';

function App() {
  const [questions, setQuestions] = useState({});
  const [currentKey, setCurrentKey] = useState('start');

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const current = questions[currentKey];

  const handleClick = (option) => {
    const nextKey = current.next?.[option];
    setCurrentKey(nextKey || 'end');
  };

  if (!current) return <div className="app">Loading...</div>;

  return (
    <div className="app">
      <div className="question-container">
        <h2>{current.question}</h2>
        <div className="options">
          {current.options?.map((opt) => (
            <button key={opt} onClick={() => handleClick(opt)}>
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

