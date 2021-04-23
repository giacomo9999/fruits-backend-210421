module.exports = (app) => {
  const fruits = require("../controllers/fruits.controller.js");
  const router = require("express").Router();
  app.use("/api/fruits", router);

  // create a new fruit
  router.post("/", fruits.create);
  router.get("/inStock", fruits.findAllInStock);
  router.get("/", fruits.findAll);
  router.get("/:id", fruits.findOne);
  router.put("/:id", fruits.update);
  router.delete("/:id", fruits.delete);
  router.delete("/", fruits.deleteAll);
};
