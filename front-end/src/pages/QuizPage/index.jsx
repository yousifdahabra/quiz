import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startQuiz, submitAnswer, calculateScore } from '../../redux/quizSlice';
import Question from './../../components/Question/';

const QuizPage = () => {
}

export default QuizPage;