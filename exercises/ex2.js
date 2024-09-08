// ex 1/3 > fazer uma nova folder e startar do zero um projeto com express

//ex 2 >>
// const express = require("express");

// const app = express();
// let counter = 0;
// app.use((req, res, next) => {
//   counter++;
//   console.log(`olá, sou o primeiro middleware da função ${counter}`);
//   next();
// });
// app.use((req, res, next) => {
//   counter++;
//   console.log(`olá, sou o segundo middleware da função ${counter}`);
//   res.send(`<h1>${counter}</h1>`);
// });
// app.listen(3003);

//ex 3

const express = require("express");

const app = express();

app.get("/users", (req, res, next) => {
  const path = req.url;
  console.log("resposta única à /users");
  res.send(`<h1>Bem vindo à ${path}</h1>`);
});

app.get("/", (req, res, next) => {
  const path = req.url;
  console.log("resposta única à pagina padrão");
  res.send(`<h1>Bem vindo à ${path}</h1>`);
});

app.listen(3003);
