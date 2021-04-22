const db = require("../models");
const Fruit = db.fruits;

exports.create = (req, res) => {
  console.log("Creating a new fruit...",db.Fruits);
  // Validate request
  if (!req.body.fruitName) {
    res.status(400).send({ message: "Content cannot be empty." });
    return;
  }

  const fruit = new Fruit({
    fruitName: req.body.fruitName,
    fruitColor: req.body.fruitColor,
    fruitShape: req.body.fruitShape,
  });

  fruit
    .save(fruit)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while creating the fruit.",
      });
    });
};

exports.findAll = (req, res) => {};
exports.findOne = (req, res) => {};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};
exports.deleteAll = (req, res) => {};
exports.findAllInStock = (req, res) => {};
