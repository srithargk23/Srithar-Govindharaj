class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation) {
      case "add":
        return this.a + this.b;
      case "sub":
        return this.a - this.b;
      case "mul":
        return this.a * this.b;
      case "div":
        if (this.b === 0) return "Cannot divide by zero";
        return this.a / this.b;
      default:
        return "Invalid operation";
    }
  }
}


const calc = new Calculator(10, 5, "add");
console.log("Result:", calc.calculate());
