const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

const db = require('./config/mongoose');

// setting up ejs engine
app.set('view engine', 'ejs');
app.set('views', './views');

// setting up middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('assets'));
app.use('/', require('./routes'));



// running the server on port 8000
app.listen(port, (err) => {
    if(err){console.log(`Error in running server, ${err}`); return;}

    console.log(`Express server is running on port: ${port}`);
})