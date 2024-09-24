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
  // o nome a partir dos "dois pontos" no arquivo de roteamento, torna-se o nome da prop dos params para o express (router.get("products/:productId") >> productId)
  const productId = req.params.productId;

  Product.findById(productId, (product) => {
    console.log(product);
  });

  res.redirect("/");
};
