const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

router.get("/cart", productsController.getCart);

router.get("/", productsController.getProducts);

router.get("/checkout", productsController.getCheckoutPage);

module.exports = router;
