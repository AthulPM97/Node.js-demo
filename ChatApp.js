//core modules
const path = require('path');

//other modules
const express = require("express");
const bodyParser = require("body-parser");

//route imports
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require('./routes/contact');

const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: false })); // configuring body parser to not use extended query string library. Use normal library instead.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);

app.use('/', shopRoutes);

app.use('/', contactRoutes);

app.use((req,res,next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

//listener
app.listen(3000, () => {
  console.log("running on port 3000");
});
