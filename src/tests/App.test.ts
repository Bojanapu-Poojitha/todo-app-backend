import request from 'supertest';
import express from 'express';
import route from '../routes/Routers';
import { addTaskItem,getAllTasks,deleteTask,updateTask } from '../services/TaskService';

jest.mock('../services/TaskService',()=>({
    addTaskItem:jest.fn(),
     getAllTasks: jest.fn(),
    deleteTask:jest.fn(),
    updateTask:jest.fn(),
}));
const app = express();
app.use(express.json());
app.use('/users',route);
describe("All tasks service operations",()=>{
    test('/POST method , to add items', async()=>{
        const newItem ={
            title: 'hyderabad biryani',
            description: "it is famous biryani",
            status:'medium',
            priority:'high',
            deadline:'2025-10-5'
        };
        (addTaskItem as jest.Mock ).mockResolvedValue(newItem);
        const result = await request(app).post('/users/newItem').send(newItem);
        expect(result.status).toBe(201);
        expect(result.body.message).toBe("item created");
        expect(result.body.data).toEqual(newItem);
    })
})