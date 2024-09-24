const fs = require("fs");
const projectRoot = require("../utils/path");
const path = require("path");
const p = path.join(projectRoot, "data", "products.json");

const getProductsFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return callback([]);
    }
    callback(JSON.parse(fileContent));
  });
};
module.exports = class Product {
  constructor(productName, productImgUrl, productDescription, productPrice) {
    this.title = productName;
    this.imgUrl = productImgUrl;
    this.description = productDescription;
    this.price = productPrice;
  }

  save() {
    this.productId = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // static keyword é usada para garantir que o acesso ao método seja feito com a iniciação da classe diretamente, sem a necessidade de criar primeiro um exemplo
  // para só então acessar o método, exemplo em método estático:
  // const planes = Planes.getAllPlaneModels(); (GetAllPlaneModels é método estático de Planes) >> método não estático: const planes = new Planes(''); const allPlanes = planes.getAllPlanes();
  static fetchAll(cb) {
    // return products;
    getProductsFromFile(cb);
  }

  static findById(id, callback) {
    getProductsFromFile((products) => {
      const product = products.find((prod) => prod.productId === id);
      callback(product);
    });
  }
};
