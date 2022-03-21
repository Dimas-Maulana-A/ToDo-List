import express from "express";
import { 
    getAllTodo,
    createTodo, 
    getTodoById,
    updateTodo,
    deleteTodo
} from "../controler/todo.js";

const router = express.Router();

router.get('/', getAllTodo);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;