const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    createdTodo => {
      res.send(createdTodo);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find({}).then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.send("Invalid Id passed");
  }
  Todo.findById(req.params.id).then(todo => {
    if (!todo) {
      return res.status(404).send("Cannot find a todo by that id");
    }
    res.send(todo);
  }).catch((e)=> {
    res.send("Couldn't fetch the todo");
  })
});

app.listen(3000, () => {
  console.log("Server has started");
});

module.exports = {
  app
};
