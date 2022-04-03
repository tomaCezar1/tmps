// If we want to add a new shape, we will need to modify existing code, which violates the principle
// We can create an interface that each shape will implement and call the getArea method -> a scalable solution
class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

class AreaCalculator {
  public calculateRectangleArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }

  public calculateCircleArea(circle: Circle): number {
    return Math.PI * (circle.radius * circle.radius);
  }
}

// interface Shape {
//   calculateArea(): number;
// }

// class Rectangle implements Shape {
//   public width: number;
//   public height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   public calculateArea(): number {
//     return this.width * this.height;
//   }
// }

// class Circle implements Shape {
//   public radius: number;

//   constructor(radius: number) {
//     this.radius = radius;
//   }

//   public calculateArea(): number {
//     return Math.PI * (this.radius * this.radius);
//   }
// }

// class AreaCalculator {
//   public calculateArea(shape: Shape): number {
//     return shape.calculateArea();
//   }
// }
