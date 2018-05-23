var mongoose = require("mongoose");

mongoose.Promise = global.Promise; // Sets the mongoose promise to use default javascript promises
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {
  mongoose
};
