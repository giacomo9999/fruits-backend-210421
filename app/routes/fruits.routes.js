module.exports = (app) => {
  const fruits = require("../controllers/fruits.controller.js");
  let router = require("express").Router();

  // create a new fruit
  router.post("/", fruits.create);

  app.use("/api/fruits", router);
};
