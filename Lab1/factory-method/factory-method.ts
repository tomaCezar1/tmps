enum ProdcutTypes {
  A = 'A',
  B = 'B',
  C = 'C',
}

interface IProduct {
  method(param?: any): void;
}

class ProductA implements IProduct {
  method = (param?: any) => {
    return 'Method of ProductA';
  };
}

class ProductB implements IProduct {
  method = (param?: any) => {
    return 'Method of ProductB';
  };
}

class ProductFactory {
  public static createProduct(type: string): IProduct {
    if (type === ProdcutTypes.A) {
      return new ProductA();
    } else if (type === ProdcutTypes.B) {
      return new ProductB();
    }

    return null;
  }
}

function show(): void {
  var a: IProduct = ProductFactory.createProduct('A');
  var b: IProduct = ProductFactory.createProduct('B');

  console.log(a.method());
  console.log(b.method());
}

show();
