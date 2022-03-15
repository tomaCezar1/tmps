interface IComponent {
  operation(): void;
}

class Component implements IComponent {
  private str: String;

  constructor(str: String) {
    this.str = str;
  }

  public operation(): void {
    console.log('operation of Component', this.str);
  }
}

class Decorator implements IComponent {
  private component: IComponent;
  public id: Number;

  constructor(id: Number, component: IComponent) {
    this.component = component;
    this.id = id;
  }

  public newOperation() {
    console.log('new operation from decorator');
  }

  public specialOperation() {
    console.log('specialOperation from decorator');
  }

  public operation(): void {
    console.log('`operation` of Decorator', this.id);
    this.component.operation();
  }
}

class SuperDecorator extends Decorator {
  constructor(id: Number, component: IComponent) {
    super(id, component);
  }

  public operation(): void {
    super.operation();
    console.log('operation of SuperDecorator');
  }
}

const component = new Component('test');
const firstDecorator = new Decorator(1, component);
const superDecorator = new SuperDecorator(2, firstDecorator);
console.log(firstDecorator);
console.log(superDecorator);
