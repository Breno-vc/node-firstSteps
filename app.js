const express = require("express");
const path = require("path");

const app = express();

//add template engine pug (JADE)
app.set("view engine", "pug");
app.set("views", "views");

//add body-parser dep.
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");

// registra um middleware para parsear o body request
app.use(bodyParser.urlencoded({ extended: false }));

// registrando arquivos estáticos (tipo css) [read only]
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "scripts")));

// string argument: filter '/admin' for admin routes
app.use("/admin", adminData.routes);
app.use(shopRoute);

// adicionando um "notfound" handler middleware
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});
app.listen(3001);
