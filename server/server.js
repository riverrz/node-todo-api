const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

var app = express();

const port = process.env.PORT || 3000;

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
    return res.status(400).send();
  }
  Todo.findById(req.params.id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.delete("/todos/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(req.params.id)
    .then(removedTodo => {
      if (!removedTodo) {
        return res.status(404).send();
      }
      res.send({ removedTodo });
    })
    .catch(err => {
      res.status(400).send();
    });
});

app.patch('/todos/:id', (req,res)=> {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send();
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime(); 
  } else {
    body.completed = false;
    body.completedAt=null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((updatedTodo)=> {
    if (!updatedTodo) {
      return res.status(404).send();
    }
    res.send({updatedTodo});
  }).catch((err)=> {
    res.status(400).send();
  })
})

app.listen(port, () => {
  console.log("Server has started");
});

module.exports = {
  app
};
