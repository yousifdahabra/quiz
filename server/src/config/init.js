import dotenv from "dotenv"
import cors from "cors"
import express from "express";

export const init = (app) =>{
    dotenv.config()

    app.use(express.json())
    app.use( 
        cors({
            origin:"*",
        })
    );
    
}

export const registerRoutes = (app,...params) =>{
    params.forEach((router)=>{

    });
}


