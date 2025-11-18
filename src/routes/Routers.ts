import { Router } from "express";
import { addTask, getTask } from "../controllers/TaskOperations";

const route = Router();

route.post("/newItem", addTask);
route.get('/tasks',getTask)
export default route;
