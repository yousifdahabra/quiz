import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { setQuizzes } from '../../redux/quizSlice';
import quizzesData from '../../data/quizzes.json';


const QuizList = () => {
    const dispatch = useDispatch();
    const quizzes = useSelector((state) => state.quiz.quizzes);
    useEffect(() => {
        dispatch(setQuizzes(quizzesData));
    }, [dispatch]);
    
}


export default QuizList;