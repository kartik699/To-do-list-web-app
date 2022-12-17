const mongoose = require('mongoose');

// creating schema for todos
const todoSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

// creating model
const Todo = mongoose.model('Todos', todoSchema);

module.exports = Todo;