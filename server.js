const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = { origin: "http://localhost:8081" };

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the fruits server" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
