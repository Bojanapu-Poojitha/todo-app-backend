import { itemsCollection } from "../config/todoFirebase";
import { ItemType } from "../type/ItemType";

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
