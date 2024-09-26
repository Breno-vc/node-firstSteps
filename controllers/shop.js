const Products = require("../models/product");
const Cart = require("../models/cart");

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    pageTitle: "Your cart",
    path: "/shop/cart",
  });
};

exports.postCart = (req, res) => {
  const prodId = req.body.productId;
  Products.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
};

exports.getCheckoutPage = (req, res) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout Page",
    path: "/shop/checkout",
  });
};
