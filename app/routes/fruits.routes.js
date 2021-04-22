module.exports = (app) => {
  const fruits = require("../controllers/fruits.controller.js");
  const router = require("express").Router();
  app.use("/api", router);

  router.get("/fruits", (req, res) => {
    console.log("Router here.");
    res.send({ type: "GET" });
  });

  // create a new fruit
  router.post("/fruits", fruits.create);
};
