import { Schema, model } from "mongoose";

const questionSchema = new Schema({
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["options", "input"],
      default: "options",
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      default: undefined,
    },
    answer: {
      type: String,
      required: true,
    },
  });

  export const Question = model("Question", questionSchema);
  export { questionSchema };
