const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add products",
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.render("shop", { products: products, pageTitle: "Shop", path: "/" });
};
