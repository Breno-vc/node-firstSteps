const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res) => {
  // __dirname é uma globalVar do Node que retém o caminho absoluto
  // relativo à pasta raíz do projeto (partindo da raíz do SO '/')
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  // essa fn não recebe '/', justamente pq ela já concatena com a lógica internamente
});

module.exports = router;
