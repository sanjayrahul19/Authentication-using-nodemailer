const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");
const router = require("./router/user");

app.use(express.json());
connectDB();
app.use("/", router);

app.listen(PORT, () => {
  console.log("Server is up and running");
});
