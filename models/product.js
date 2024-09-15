const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  // static keyword é usada para garantir que o acesso ao método seja feito com a iniciação da classe diretamente, sem a necessidade de criar primeiro um exemplo
  // para só então acessar o método, exemplo em método estático:
  // const planes = Planes.getAllPlaneModels(); (GetAllPlaneModels é método estático de Planes) >> método não estático: const planes = new Planes(''); const allPlanes = planes.getAllPlanes();
  static fetchAll() {
    return products;
  }
};
