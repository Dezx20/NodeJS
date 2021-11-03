const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("YohOO im here");

  next();
});
app.use("/add-product", (req, res, next) => {
  console.log("In the porduct middleware");
  res.send("<h1>Products page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In the Another middleware");
  res.send("<h1>hello from backend</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
