const express = require("express");

const router = express.Router();
const productsController = require("../controllers/products");

// /admin/add-product >> METHOD : GET
router.get("/add-product", productsController.getAddProduct);

router.get("/products", productsController.getAdminProduct);

router.get("/edit-product"), productsController.getEditProduct;

// /admin/add-product >> METHOD : POST

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
