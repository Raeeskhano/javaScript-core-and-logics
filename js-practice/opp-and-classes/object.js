// function multipleBy10(num) {
//   return num * 10;
// }

// multipleBy10.power = 2;

// console.log(multipleBy10(10)); //100
// console.log(multipleBy10.power); // 2
// console.log(multipleBy10.prototype); // {}

function createItem(name, price) {
  this.name = name;
  this.price = price;
}

createItem.prototype.increment = function () {
  this.score++;
};

createItem.prototype.printMe = function () {
  console.log(`${this.name} is ${this.price}`);
};

const coffe = new createItem("coffe", "350");
const tea = new createItem("Tea", "500");

coffe.printMe();
tea.printMe();
