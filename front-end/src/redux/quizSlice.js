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
     },
  });
  