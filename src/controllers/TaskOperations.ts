import { Request, Response } from "express";
import { addTaskItem } from "../services/TaskService";
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
