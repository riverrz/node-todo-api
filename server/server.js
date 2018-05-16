var mongoose = require("mongoose");

mongoose.Promise = global.Promise;  // Sets the mongoose promise to use default javascript promises
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: "   Work on node "
// });

// newTodo.save().then((todo)=> {
//     console.log(JSON.stringify(todo,undefined,2));
// }).catch((err)=> {
//     console.log("Couldn't save the todo: ", err);
// })

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: ''
});

newUser.save().then((user)=> {
    console.log(JSON.stringify(user,undefined,2));
}, (err)=> {
    console.log("Unable to save the user", err);
});