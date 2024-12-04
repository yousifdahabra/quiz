import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Result = () => {
    const score = useSelector((state) => state.quiz.score);
    const totalQuestions = useSelector((state) => state.quiz.currentQuiz?.questions.length);
    return (
        <div className="result-page">
          <h1>Quiz Result</h1>
          <p>
            You scored {score} out of {totalQuestions}
          </p>
          <Link to="/">Back to Quiz List</Link>
        </div>
      );
    
    
};
export default Result;
