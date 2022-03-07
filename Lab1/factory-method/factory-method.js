var ProdcutTypes;
(function (ProdcutTypes) {
  ProdcutTypes['A'] = 'A';
  ProdcutTypes['B'] = 'B';
  ProdcutTypes['C'] = 'C';
})(ProdcutTypes || (ProdcutTypes = {}));
class ProductA {
  constructor() {
    this.method = (param) => {
      return 'Method of ProductA';
    };
  }
}
class ProductB {
  constructor() {
    this.method = (param) => {
      return 'Method of ProductB';
    };
  }
}
class ProductFactory {
  static createProduct(type) {
    if (type === ProdcutTypes.A) {
      return new ProductA();
    } else if (type === ProdcutTypes.B) {
      return new ProductB();
    }
    return null;
  }
}
function show() {
  var a = ProductFactory.createProduct('A');
  var b = ProductFactory.createProduct('B');
  console.log(a.method());
  console.log(b.method());
}
show();
