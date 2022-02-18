const express = require('express');
const api = require('../services/api');
const router = express.Router();


// get all todos
router.get('/', async (req, res) => {
   try{
         const todos = await api.getTodos();
         if(!todos) return res.status(404).send('No todos found');
         res.status(200).json({
            success: true,
            todos
         })
   }catch(err){
       res.status(500).json({
           message: err.message
       });
   }
});

// add todo
router.post('/', async (req, res) => {
    try{
        const task = req.body;
        await api.addTodo(task);
        res.json({
            success: true,
            message: 'Task added successfully',
            task
        });
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});


// delte a todo by id
router.delete('/:id', async(req, res) => {
    try {
        await api.deleteTodo(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.delete('/',async(req,res) =>{
    try{
        await api.deleteAllTodos();
        res.status(200).json({
            success: true,
            message: 'All tasks deleted successfully',
            todos: api.getTodos()
        })
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
})
module.exports = router;