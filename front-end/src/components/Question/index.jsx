import React, { useEffect } from "react";
import './style.css';

const Question = ({ question, userAnswer, onAnswer }) => {
    const { type, question: questionTitle, options } = question;

    return (
        <div className="question">
        <p>{questionTitle}</p>
        {type === 'options' ? (
          options.map((opt, index) => (
            <div key={index}>
              <input
                type="radio"
                name={question.id}
                value={opt}
                checked={userAnswer === opt}
                onChange={() => onAnswer(opt)}
              />
              <label>{opt}</label>
            </div>
          ))
        ) : (
          <input
            type="text"
            value={userAnswer || ''}
            onChange={(e) => onAnswer(e.target.value)}
          />
        )}
      </div>
      );
};

export default Question;
