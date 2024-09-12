const express = require("express");
const path = require("path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  const products = adminData.products;
  //método especial que permite o uso de uma template rendering engine (definida no app.js)
  // como já defini que views é a pasta default de renderização, e pug é a template engine, não preciso definir caminho ou extensão
  res.render("shop", { products: products, docTitle: "Shop" });

  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // essa fn não recebe '/', justamente pq ela já concatena com a lógica internamente
});

module.exports = router;
