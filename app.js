const express = require("express");

const app = express();

app.use("/add-product", (req, res, nextMid) => {
  // Sem chamar o nextMiddleware Fn, eu nunca executo o próximo middleware
  // exceto se caso meu path seja de fato diferente de /add-product
  console.log("Estou na página de adicionar produto");
  res.send("<h1>Bem vindo à página de adição de produtos</h1>");
});

app.use("/", (req, res) => {
  // o console irá disparar independentemente da ausência de um next()
  // no middleware anterior, por questão de como a fn .use funciona
  // capturando todos os comportamentos de rota
  console.log("Estou na página padrão");

  res.send("<h1>Olá, bem vindo à minha página padrão.</h1>");
});

app.listen(3001);
