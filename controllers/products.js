const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add products",
  });
};

exports.getAdminProduct = (req, res) => {
  res.render("admin/products", {
    pageTitle: "Admin Products Management",
    path: "/admin/products",
  });
};

exports.getEditProduct = (req, res) => {
  res.render("admin/edit-product", {
    path: "/admin/edit-product",
    pageTitle: "Edit a product",
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      products: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/shop/cart",
  });
};

exports.getCheckoutPage = (req, res) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout Page",
    path: "/shop/checkout",
  });
};
