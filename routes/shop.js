const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  // __dirname é uma globalVar do Node que retém o caminho absoluto
  // relativo à pasta raíz do projeto (partindo da raíz do SO '/')

  //método especial que permite o uso de uma template rendering engine (definida no app.js)
  // como já defini que views é a pasta default de renderização, e pug é a template engine, não preciso definir caminho ou extensão
  res.render("shop");

  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // essa fn não recebe '/', justamente pq ela já concatena com a lógica internamente
});

module.exports = router;
