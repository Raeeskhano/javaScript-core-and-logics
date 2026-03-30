const balance = 1000;
console.log(balance);

const bankbalance = new Number(2000000); //explicitly creating a number object to use methods and properties of number
console.log(bankbalance);
console.log(bankbalance.toFixed(2));

const otherNumber = 123.8976;
console.log(otherNumber.toPrecision(4)); //round off the number to 4 significant digits

const nextNumber = 100000000;
console.log(nextNumber.toLocaleString()); //it will add commas for thousands, millions, etc.

//**************Dates****************/
console.log(Math); //its by default object in javascript.
console.log(Math.PI);
console.log(Math.abs(-4)); //absolute value: make negative number positive
console.log(Math.round(4.5));
console.log(Math.ceil(4.2)); //round up to the higher number
console.log(Math.floor(4.9)); //round down to the lower number
console.log(Math.min(2, 3, 5, 7)); //return the minimum number from the given numbers
console.log(Math.max(2, 3, 5, 7)); //return the maximum number from the given numbers

console.log(Math.random()); //return a random number between 0 & 1
console.log(Math.random() * 10); //return a random number between 0 & 10
console.log(Math.floor(Math.random() * 10)); //return a random number between 0 & 9 and floor make the lowest number to return
