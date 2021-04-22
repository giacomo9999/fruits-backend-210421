const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

let corsOptions = { origin: "http://localhost:8081" };

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.msg1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => console.error(error));

app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the fruits server" });
});

require("./app/routes/fruits.routes")(app);
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
