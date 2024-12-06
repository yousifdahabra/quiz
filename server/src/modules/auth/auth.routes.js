import { Router } from "express";
import { login } from "./auth.conreoller.js";

const authRouter = new Router();

authRouter.post("/login",login)


export default authRouter