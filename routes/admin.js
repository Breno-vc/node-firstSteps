const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

// /admin/add-product >> METHOD : GET
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product >> METHOD : POST

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
