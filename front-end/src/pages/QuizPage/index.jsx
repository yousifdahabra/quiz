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


}

export default QuizPage;