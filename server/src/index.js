import express from "express";
import connectToDatabase from "./db/connection.js";
import { init } from "./config/init.js";
const app = express();

init(app)
app.listen(process.env.SERVER_PORT, ()=>{
    console.log('server runing is '+process.env.SERVER_PORT)
    connectToDatabase()
});
