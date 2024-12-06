import { connect} from "mongoose";

const connectToDatabase = async () => {
  try {
    await connect(process.env.DATABASE_URL);

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
