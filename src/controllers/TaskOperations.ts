import { Request, Response } from "express";
import { addTaskItem, getAllTasks } from "../services/TaskService";
import { ItemType } from "../type/ItemType";

export const addTask = async (req: Request, res: Response) => {
  try {
    const newTask: ItemType = req.body;
    const storeNewItem = await addTaskItem(newTask);

    res.status(201).json({ message: "item created", data: storeNewItem });
  } catch (e) {
    res.status(500).json({ message: "failed to add item" });
  }
};
export const getTask = async (req: Request, res: Response) => {
  try {
    const getItems = await getAllTasks();
    res.status(200).json({ message: "the list of items are", data: getItems });
  } catch (e) {
    res.status(500).json({ message: "failed to add item" });
  }
};
