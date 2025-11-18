import { Router } from "express";
import { addTask, getTask,deleteItemTask } from "../controllers/TaskOperations";

const route = Router();

route.post("/newItem", addTask);
route.get('/tasks',getTask)
route.delete('/item/:id',deleteItemTask);
export default route;
