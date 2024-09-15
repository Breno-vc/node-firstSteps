const products = [];

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add products",
  });
};

exports.postAddProduct = (req, res) => {
  products.push({ title: req.body?.title });
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  res.render("shop", { products: products, pageTitle: "Shop", path: "/" });
};
