import express from "express";
import dotenv from "dotenv"

const app = express();
app.use(express.json())
dotenv.config()

app.listen(process.env.SERVER_PORT, ()=>{
    console.log('server runing is '+process.env.SERVER_PORT)

});
