import express from "express";
const app = express();
import authRoute from "./routes/auth.route.js";

import configExpress from "./config/config.js";
configExpress(app);

//import dotenv from 'dotenv'; 
//dotenv.config();




//import userRouter from "";
//app.use(userRouter);
app.use("/api",authRoute);

export default app;