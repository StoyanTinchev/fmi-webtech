const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

let todos = []
let id = 1;

// GET request for /api/todos
app.get('/api/todos', (req, res) => {
    return res.json(todos);
});

// POST request for /api/todos
app.post('/api/todos', (req, res) => {
    if (req.body?.text === undefined || req.body.text.trim() === '') {
        return res.status(400).send({text: 'Invalid text'});
    }
    const todo = {
        id: id++,
        text: req.body,
        completed: false,
    };

    todos.push(todo);
    return res.json(todo);
});

// DELETE request for /api/todos/:id
app.delete('/api/todos/:id', (req, res) => {
    const id = +req.params.id;
    const myTodo = todos.find(t => t.id === id);
    if (!myTodo) {
        return res.status(400).send({text: 'Invalid ID'});
    }

    todos = todos.filter(todo => todo.id !== 1);
    res.status(204).send("Deleted successfully!");
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});