import { Router } from "express";
import {
  addTask,
  getTask,
  deleteItemTask,
  updateItemTask,
} from "../controllers/TaskOperations";

const route = Router();

route.post("/newItem", addTask);
route.get("/tasks", getTask);
route.delete("/item/:id", deleteItemTask);
route.put("/modify/:id", updateItemTask);
export default route;
