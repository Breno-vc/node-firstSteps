const express = require("express");

const app = express();

//add body-parser dep.
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

// registra um middleware para parsear o body request
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoute);
app.use(shopRoute);

// adicionando um "notfound" handler middleware
app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});
app.listen(3001);
