import express from "express";
import cors from "cors";
import morgan from "morgan"
const app = express();
import tasksRoutes from "./routes/tasks.routes.js";



app.use(express.json());
app.use(tasksRoutes);
app.use(cors())
app.use(morgan("dev"))

export default app;
