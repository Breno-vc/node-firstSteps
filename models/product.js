const fs = require("fs");
const projectRoot = require("../utils/path");
const path = require("path");

const p = path.join(projectRoot, "data", "products.json");
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(p, (error, fileContent) => {
      let products = [];
      if (!error) {
        products = JSON.parse(fileContent);
      }
      // importante, se uma função declarada fosse usada (em vez da arrow function como argumento do método da classe) THIS perderia seu contexto
      // e passaria a se referir ao objeto intero à nova função, em vez de se referir ao objeto da classe PRODUCT
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // static keyword é usada para garantir que o acesso ao método seja feito com a iniciação da classe diretamente, sem a necessidade de criar primeiro um exemplo
  // para só então acessar o método, exemplo em método estático:
  // const planes = Planes.getAllPlaneModels(); (GetAllPlaneModels é método estático de Planes) >> método não estático: const planes = new Planes(''); const allPlanes = planes.getAllPlanes();
  static async fetchAll(callback) {
    // return products;
    await fs.readFile(p, (err, fileContent) => {
      if (err) {
        callback([]);
      }

      callback(JSON.parse(fileContent));
    });
  }
};
