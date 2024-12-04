import React, { useEffect } from "react";

const Question = ({ question, userAnswer, onAnswer }) => {
    const { type, question: questionTitle, options } = question;

    return (
        <div className="question">
            <p>{questionTitle}</p>

        </div>
    );
};

export default Question;
