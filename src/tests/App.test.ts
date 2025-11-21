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