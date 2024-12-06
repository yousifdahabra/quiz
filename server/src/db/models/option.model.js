import { Schema, model } from "mongoose";
import { questionSchema } from "./question.model";
const quizSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    questions: [questionSchema],
});

export const Quiz = model("Quiz", quizSchema);
