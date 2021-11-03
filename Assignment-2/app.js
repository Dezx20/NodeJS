const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
  console.log("middleware 2");
  res.send("<h1>userList</h1>");
});

app.use("/", (req, res, next) => {
  console.log("middleware 1");
  res.send("<h1>home</h1>");
});

app.listen(3000);
