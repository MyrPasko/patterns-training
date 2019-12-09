// Not good approach because of global variable

// let instance;

// class Counter {
//   constructor() {
//     if (!instance) {
//       instance = this;
//     }
//     instance.count = 0;
//     return instance;
//   }

//   getCount() {
//     return instance.count;
//   }

//   increaseCount() {
//     return instance.count++;
//   }
// }

// const myCounter1 = new Counter();
// const myCounter2 = new Counter();

// myCounter1.increaseCount();
// myCounter1.increaseCount();

// console.log(myCounter2.getCount());

// Better approach

console.log("----------Singleton----------");

class StaticCounter {
  constructor() {
    if (typeof StaticCounter.instance === "object") {
      return StaticCounter.instance;
    }
    this.count = 0;
    StaticCounter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const myStaticCounter1 = new StaticCounter();
const myStaticCounter2 = new StaticCounter();

myStaticCounter1.increaseCount();
myStaticCounter1.increaseCount();

console.log(myStaticCounter2.getCount());
