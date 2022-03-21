import Todo from "../models/todomodel.js";

export const getAllTodo = async(req, res) => {

    try {
        const toDo = await Todo.findAll();   
        res.json(toDo);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getTodoById = async(req, res) => {

    try {
        const todo = await Todo.findAll({
            where: {
                id:req.params.id
            }
        });   
        res.json(todo[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createTodo = async(req, res) => {

    try {
        await Todo.create(req.body);   
        res.json({
            "message":"List Create"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateTodo = async(req, res) => {

    try {
        await Todo.update (req.body, {
            where: {
                id: req.params.id
            }
        });   
        res.json({
            "message":"List Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteTodo = async(req, res) => {

    try {
        await Todo.destroy ({
            where: {
                id: req.params.id
            }
        });   
        res.json({
            "message":"List Delete"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}