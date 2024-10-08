const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add products",
  });
};

exports.getAdminProduct = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      products: products,
      pageTitle: "Admin Products Management",
      path: "/admin/products",
    });
  });
};

exports.getEditProduct = (req, res) => {
  res.render("admin/edit-product", {
    path: "/admin/edit-product",
    pageTitle: "Edit a product",
  });
};

exports.postAddProduct = (req, res) => {
  const { productName, productImgUrl, productDescription, productPrice } =
    req.body;
  const product = new Product(
    productName,
    productImgUrl,
    productDescription,
    productPrice
  );
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

exports.getProduct = (req, res) => {
  const productId = req.params.productId;

  Product.fetchAll((products) => {
    Product.findById(productId, (product) => {
      if (!product) {
        return res.redirect("/"); // Redireciona caso o produto não exista
      }
      res.render("shop/product-detail", {
        products: products, // Passa a lista de produtos
        product: product, // Passa o produto específico, se necessário
      });
    });
  });
};
