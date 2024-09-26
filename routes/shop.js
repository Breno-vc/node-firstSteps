const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");
const shopController = require("../controllers/shop");

router.get("/", productsController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getCheckoutPage);

router.post("/cart", shopController.postCart);

// rotas dinâmicas devem permanecer em baixo do código porquê o express faz uma leitura top-to-bottom, ou seja, todas as rotas posteriores à /products/* seriam ignoradas e tratadas como
// /:productId
router.get("/products/:productId", productsController.getProduct);

module.exports = router;
