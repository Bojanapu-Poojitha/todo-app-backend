import { Router } from "express";
import { addTask } from "../controllers/TaskOperations";

const route = Router();

route.post("/newItem", addTask);
export default route;
