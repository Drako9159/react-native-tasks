import { Router } from "express";
const router = Router();
import {
  getTasks,
  getTaskCounter,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.js";

//Get all tasks
router.get("/tasks", getTasks);
//Get number tasks
router.get("/tasks/count", getTaskCounter);
//Get a task
router.get("/tasks/:id", getTask);
//Create a task
router.post("/tasks", createTask);
//Delete a task
router.delete("/tasks/:id", deleteTask);
//Update a task
router.put("/tasks/:id", updateTask);

export default router;
