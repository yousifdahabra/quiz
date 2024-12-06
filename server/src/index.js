import express from "express";
import dotenv from "dotenv"
import cors from "cors"

const app = express();
app.use(express.json())
app.use(
    cors({
        origin:"*",
    })
);

dotenv.config()

app.listen(process.env.SERVER_PORT, ()=>{
    console.log('server runing is '+process.env.SERVER_PORT)

});
