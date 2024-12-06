import { Router } from "express";
import { quizList, insertQuiz } from "./quiz.conreoller.js";
import { authMiddleware } from "../auth/auth.middleware.js";

const quizRouter = new Router();

quizRouter.get("/quiz",authMiddleware,quizList)
quizRouter.post("/add",authMiddleware,insertQuiz)


export default quizRouter