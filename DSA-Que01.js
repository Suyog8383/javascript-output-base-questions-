class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  
  class Labrador extends Dog {
    // 1
    constructor(name, size) {
      this.size = size;
    }
    // 2
    constructor(name, size) {
      super(name);
      this.size = size;
    }
    // 3
    constructor(size) {
      super(name);
      this.size = size;
    }
    // 4
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  
};
//With which constructor can we successfully extend the Dog class? ==> 2

[1, 2, 3, 4].reduce((x, y) => console.log(x, y));

//1,2 and undefined 3 and undefined 4

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

//20 20 20 40


let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

//10  10