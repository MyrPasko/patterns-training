console.log("----------Factory method----------");

console.log("Shit");

// Class constructor

class Bmv {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmvFactory {
  create(type) {
    if (type === "X5") {
      return new Bmv(type, 108000, 300);
    }
    if (type === "X6") {
      return new Bmv(type, 111000, 320);
    }
  }
}

const factory = new BmvFactory();

const x5 = factory.create("X5");
const x6 = factory.create("X6");

console.log("X5", x5);
console.log("X6", x6);
