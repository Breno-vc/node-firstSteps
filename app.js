const express = require("express");

//add body-parser dep.
const bodyParser = require("body-parser");

const app = express();

// registra um middleware para parsear o body request
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, nextMid) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' />\
    <button type='submit'>Add new product</button></form>"
  );
});

// forma de filtrar baseando-se no tipo da requisição
// esse middleware só disparará em requests do tipo POST
app.post("/product", (req, res, nextMid) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res) => {
  res.send("<h1>Olá, bem vindo à minha página padrão.</h1>");
});

app.listen(3001);
