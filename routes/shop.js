const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");
const shopController = require("../controllers/shop");

router.get("/", productsController.getProducts);

router.get("/cart", shopController.getCart);
router.get("/checkout", shopController.getCheckoutPage);

module.exports = router;
