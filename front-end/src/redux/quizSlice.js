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
      submitAnswer: (state, action) => {
        const { questionId, answer } = action.payload;
        state.userAnswers[questionId] = answer;
      },
      calculateScore: (state) => {
        const currentQuiz = state.currentQuiz;
        if (!currentQuiz) return;
  
        let score = 0;
        currentQuiz.questions.forEach((q) => {
          if (state.userAnswers[q.id] === q.answer) {
            score++;
          }
        });
  
        state.score = score;
      },
    },
  });
  export const { setQuizzes, startQuiz, submitAnswer, calculateScore } =
  quizSlice.actions;

  export default quizSlice.reducer;
