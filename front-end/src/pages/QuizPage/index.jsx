import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startQuiz, submitAnswer, calculateScore } from '../../redux/quizSlice';
import Question from './../../components/Question/';

const QuizPage = () => {
    const { quizId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quiz = useSelector((state) => state.quiz.quizzes.find((q) => q.id === quizId));
    const userAnswers = useSelector((state) => state.quiz.userAnswers);
    useEffect(() => {
        if (quiz) dispatch(startQuiz(quiz));
      }, [dispatch, quiz]);
    
      const handleSubmit = () => {
        dispatch(calculateScore());
        navigate('/result');
      };
    
      return (
        <div className="quiz-page">
          <h1>{quiz?.title}</h1>
          {quiz?.questions.map((q) => (
            <Question
              key={q.id}
              question={q}
              userAnswer={userAnswers[q.id]}
              onAnswer={(answer) => dispatch(submitAnswer({ questionId: q.id, answer }))}
            />
          ))}
          <button onClick={handleSubmit}>Submit Quiz</button>
        </div>
      );
    
}

export default QuizPage;