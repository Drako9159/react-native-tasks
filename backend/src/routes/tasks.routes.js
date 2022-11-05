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

/**
 * @swagger
 * /tasks:
 * get: 
 *    summary: Get all tasks
 *    tags: [Tasks]
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 * get: 
 *    summary: Get total task counter
 *    tags: [Tasks]
 */
router.get("/tasks/count", getTaskCounter);

/**
 * @swagger
 * /tasks:
 * get:
 *    summary: Get a task by id
 *    tags: [Tasks]
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks:
 * post: 
 *    summary: Create a task
 *    tags: [Tasks]
 */
router.post("/tasks", createTask);

/**
 * @swagger
 * /tasks:
 * delete: 
 *    summary: Delete a task by id
 *    tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks:
 * put: 
 *    summary: Update a task by id
 *    tags: [Tasks]
 */
router.put("/tasks/:id", updateTask);

export default router;
