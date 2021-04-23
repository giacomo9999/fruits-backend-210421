const db = require("../models");
const Fruit = db.fruits;

exports.create = (req, res) => {
  console.log("Creating a new fruit...", req.body);
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

  console.log("Fruit:", fruit);

  fruit
    .save(fruit)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while creating the fruit.",
      });
    });
};

exports.findAll = (req, res) => {
  const fruitName = req.query.fruitName;
  console.log(req.query);
  // let condition = fruitName
  //   ? { fruitName: { $regex: new RegExp(fruitName), $options: "i" } }
  //   : {};
  let condition = { fruitName: fruitName };
  Fruit.find(condition)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving fruits",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Fruit.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "No entry found with id " + id });
      } else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving entry with id " + id });
    });
};

exports.update = (req, res) => {};
exports.delete = (req, res) => {};
exports.deleteAll = (req, res) => {};
exports.findAllInStock = (req, res) => {};
