const Todo = require('../models/Todo');

const getTodos = async()=>{
    const todos = await Todo.find();
    return todos;
}

const addTodo = async (todo)=>{
    const task = new Todo(todo);
    await task.save();
}

const deleteTodo = async (id)=>{
    await Todo.findByIdAndDelete(id);
    return Todo.find();
}

const deleteAllTodos = async()=>{
    await Todo.deleteMany({},(err)=>{
        if(err) console.log(err);
    });
}

module.exports = {
    getTodos,
    addTodo,
    deleteTodo,
    deleteAllTodos
}