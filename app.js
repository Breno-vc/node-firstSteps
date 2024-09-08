// const http = require("http");

const express = require("express");

const app = express();

// Função que irá executar em toda request recebida
// next é uma função que será passada posteriomente (próximo middleware)
app.use((req, res, nextMid) => {
  console.log("in the middleware");
  nextMid();
});

app.use((req, res, nextMid) => {
  console.log("in the other middleware");
  // enviando respostas você acaba a chain de middlewares
  // express response treatment
  res.send("<h1>Hello from express</h1>");
});

app.listen(3001);
// Ambas as funções a seguir são substituidas pelo método .listen(port)
// do Express
// const server = http.createServer(app);
// server.listen(3001);
