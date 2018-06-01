var mongoose = require("mongoose");

mongoose.Promise = global.Promise; // Sets the mongoose promise to use default javascript promises

mongoose.connect(process.env.DATABASEURL);

module.exports = {
  mongoose
};
