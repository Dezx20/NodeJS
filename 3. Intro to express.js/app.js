const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("YohOO im here");

//   next();
// });
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("In the porduct middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add products</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log("add-product route");
  console.log(req.body);

  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In the Another middleware");
  res.send("<h1>hello from backend</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);
