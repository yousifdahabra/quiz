import { Router } from "express";
import { login } from "./auth.conreoller";

const authRouter = new Router();

authRouter.post("/login",login)