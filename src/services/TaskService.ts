import { itemsCollection } from "../config/todoFirebase";
import { ItemType } from "../type/ItemType";
import { db } from "../config/todoFirebase";

export const addTaskItem = async (newTask: ItemType): Promise<ItemType> => {
  const setItems = itemsCollection.doc();

  await setItems.set({
    id: setItems.id,
    title: newTask.title,
    description: newTask.description,
    status: newTask.status,
    priority: newTask.priority,
    deadline: newTask.deadline,
  });
  return {
    ...newTask,
  };
};

export const getAllTasks = async (): Promise<ItemType[]> => {
  const result = await itemsCollection.get();
  const totalItems: ItemType[] = [];

  result.forEach((task) => totalItems.push(task.data() as ItemType));
  return totalItems;
};

export const deleteTask = async (id: string): Promise<void> => {
  await db.collection("dailyTask").doc(id).delete();
};
export const updateTask = async (
  id: string,
  updateIdTask: ItemType
): Promise<ItemType> => {
  const taskId = db.collection("dailyTask").doc(id);
  await taskId.update({
    title: updateIdTask.title,
    description: updateIdTask.description,
    status: updateIdTask.status,
    priority: updateIdTask.priority,
    deadline: updateIdTask.deadline,
  });
  return updateIdTask;
};
