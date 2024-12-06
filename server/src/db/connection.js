import { connect} from "mongoose";

const connectToDatabase = async () => {
  try {
    await connect("mongodb://localhost:27017/quizzes");

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
