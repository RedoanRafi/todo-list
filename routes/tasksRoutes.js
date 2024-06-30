import express from 'express';
import getAllTasks from '../controllers/tasks/getAllTasks.js';
import createTask from '../controllers/tasks/createTask.js';
import checkTask from '../controllers/tasks/checkTask.js';
import getSingleTask from '../controllers/tasks/getSingleTask.js';
import updateTask from '../controllers/tasks/updateTask.js';
import deleteTask from '../controllers/tasks/deleteTask.js';

const router = express.Router();
router.use('/tasks/:id', checkTask);

router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.get('/tasks/:id', getSingleTask);
router.patch('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
export default router;
