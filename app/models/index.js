const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.fruits = require("./fruit.model.js")(mongoose);

module.exports = db;
