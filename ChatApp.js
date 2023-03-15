const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // configuring body parser to not use extended query string library. Use normal library instead.

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='product'/><input type='number' name='size'/><button type='submit'>submit</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Welcome to Express!</h1>");
});

app.listen(3000);
