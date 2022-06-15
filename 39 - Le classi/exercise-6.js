class Square {
  constructor(side) {
    this.side = side;
  }
  area() {
    return this.side * this.side;
  } 
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area(/*result*/) {
    //Per arrotondare a due cifre decimali to.Fixed()
    /*result = Math.PI * this.radius * this.radius;
    return result.toFixed(2);*/ 
    
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  static calculate(figure) {
    return figure.area();
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));