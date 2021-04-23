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
    inStock: req.body.inStock,
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
  // localhost:8080/api/fruits?fruitName=apple
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

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data in update cannot be empty." });
  }
  const id = req.params.id;
  Fruit.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot update fruit with id " + id });
      } else res.send({ message: "Fruit updated successfully...id" + id });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error updating fruit." });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  console.log("Deleting...", id);
  Fruit.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "No Data" });
      } else {
        res.send({ message: "Fruit " + id + " deleted successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Cannot delete fruit with ID " + id });
    });
};

exports.deleteAll = (req, res) => {
  console.log("Deleting all fruits...");
  Fruit.deleteMany({})
    .then((data) => {
      res.send({ message: `${data.deletedCount} fruits were deleted.` });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error in clearing database" });
    });
};

exports.findAllInStock = (req, res) => {
  Fruit.find({ inStock: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "An error occurred while finding in-stock fruits" });
    });
};
