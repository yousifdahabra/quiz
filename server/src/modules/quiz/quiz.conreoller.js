import { Quiz } from "../../db/models/quiz.model.js";

export const quizList = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(404).send({
                message: "Invalid Id"
            });
        }

        const quiz = await Quiz.findById(id).populate("questions");
        if (!quiz) {
            return res.status(400).send({
                message: "quiz not found"
            });
        }

        return res.status(200).send({
            message: "quiz data",
            quiz,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            message: "something went wrong"
        });
    }
};

export const insertQuiz = async (req, res) => {
    const { id, title, questions } = req.body;

    try {
        if (!id || !title || !questions) {
            return res.status(400).send({
                message: "id, title, questions are required"
            });
        }

        const quiz = await Quiz.create({
            id,
            title,
            questions
        });

        res.status(201).send({
            message: "new quiz created",
            quiz
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            message: "something went wrong"
        });
    }
};
