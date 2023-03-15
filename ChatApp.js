const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // configuring body parser to not use extended query string library. Use normal library instead.

app.use('/admin',adminRoutes);

app.use('/shop', shopRoutes);

app.use((req,res,next) => {
  res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000, () => {
  console.log("running on port 3000");
});
