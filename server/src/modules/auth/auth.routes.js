import { Router } from "express";
import { login, register } from "./auth.conreoller.js";

const authRouter = new Router();

authRouter.post("/login",login)
authRouter.post("/registration",register)


export default authRouter