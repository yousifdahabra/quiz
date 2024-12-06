import express from "express";
import connectToDatabase from "./db/connection.js";
import { init, registerRoutes } from "./config/init.js";
import authRouter from "./modules/auth/auth.routes.js";
const app = express();

init(app)
registerRoutes(app,authRouter)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log('server runing is '+process.env.SERVER_PORT)
    connectToDatabase()
});
