import { Request, Response } from "express";
import {
  addTaskItem,
  getAllTasks,
  deleteTask,
  updateTask,
} from "../services/TaskService";
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
export const deleteItemTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteTask(id);
    res.status(400).json({ message: "item deleted success fully" });
  } catch (e) {
    res.status(500).json({ message: "item not deleted success fully" });
  }
};
export const updateItemTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const update = await updateTask(id, data);
    res.status(200).json({ message: "item updated successfully", item: data });
  } catch (e) {
    res.status(500).json({ message: "item is not updated " });
  }
};
