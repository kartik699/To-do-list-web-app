const Todo = require('../models/todos');


module.exports.home = function(req, res){

    Todo.find({}, (err, todos) => {
        if(err){console.log('Error in fetching Todos'); return;}
        
        return res.render('home', {
            title: 'To Do App',
            tasks_list: todos
        })
    })
}

module.exports.add = function(req, res){

    // Converting date recieved in required format
    let date = req.body.date;
    let splitDate = date.split('-');
    let months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let currMonth = months[splitDate[+1]];      // '+' added to convert string to integer
    date = `${currMonth} ${splitDate[2]}, ${splitDate[0]}`;

    Todo.create({
        desc: req.body.desc,
        date,
        category: req.body.category,
        done: false
    }, (err, newTodo) => {
        if(err){console.log("Error in creating Todo"); return;}

        console.log('*************', newTodo);

        return res.redirect('back');
    });

}

module.exports.toggle = function(req, res){

    let toggleId = req.query.id;

    Todo.findOne({_id: toggleId}, (err, result) => {
        if(err){console.log('Error in fetching Todo!!'); return;}

        const updateTodo = { done: !result.done };
        
        Todo.findByIdAndUpdate(toggleId, updateTodo, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated User : ", docs);
            }
        });
    
        return res.redirect('back');
    });
    
}

module.exports.delete = function(req, res){
    
    Todo.deleteMany({done: true}, (err) => {
        if(err){console.log(err); return;}

        console.log('Deleted Successfully!');

        return res.redirect('back');
    })

}