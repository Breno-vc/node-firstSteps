const Products = require("../models/product");

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    pageTitle: "Your cart",
    path: "/shop/cart",
  });
};

exports.getCheckoutPage = (req, res) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout Page",
    path: "/shop/checkout",
  });
};
