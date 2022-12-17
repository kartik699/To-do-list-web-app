const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/todos_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// acquire connection
const conn = mongoose.connection;

// check if successful or not
conn.on('error', console.error.bind(console, 'Error connecting to mongodb!'));

conn.once('open', () => {
    console.log('Connection Successful');
})