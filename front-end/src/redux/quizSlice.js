import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [],
  currentQuiz: null,
  userAnswers: {},
  score: 0,
};
const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
      setQuizzes: (state, action) => {
        state.quizzes = action.payload;
      },
      startQuiz: (state, action) => {
        state.currentQuiz = action.payload;
        state.userAnswers = {};
        state.score = 0;
      },
      
    },
  });
  