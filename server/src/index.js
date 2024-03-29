import express from "express";
import cors from "cors";
const app = express();
import connectDB from "../dbConfig.js";
import {userRouter} from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

connectDB()
app.use(express.json());
app.use(cors());
app.use("/auth",userRouter)
app.use("/recipes",recipesRouter)


app.listen(8080,()=> console.log("SERVER STARTED AT PORT:8080"))