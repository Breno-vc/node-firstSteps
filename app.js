const express = require("express");
const path = require("path");

const app = express();

//add body-parser dep.
const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

// registra um middleware para parsear o body request
app.use(bodyParser.urlencoded({ extended: false }));

// string argument: filter '/admin' for admin routes
app.use("/admin", adminRoute);
app.use(shopRoute);

// adicionando um "notfound" handler middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});
app.listen(3001);
