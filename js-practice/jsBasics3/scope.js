//scope in javascript --> {}

//global scope --> values are accessible anywhere in the code and scope.
var c = 300;
let a = 400;

if (true) {
  //blocked scope --> values are accessible only within the block only in case of let and const not var.
  let a = 5;
  const b = 10;
  var c = 15;

  console.log("inner scopoed value of a : ", a);
}

console.log("Global value of a : ", a);
// console.log(b);
console.log(c);

//*****************************************/

function one() {
  const userName = "Raees";

  function two() {
    const website = " Raees.com";
    console.log(userName + website);
  }

  // console.log(website); //gives error website is not accessible in this scope.

  two();
}

// console.log(userName); // gives error website is not accessible in this scope.

one();

//*************************************

if (true) {
  const userName = "Raees";
  if (userName === "Raees") {
    const website = " Raees.com";
    console.log(userName + website);
  }

  // console.log(website);
}

// console.log(userName);

//*******************************************/
console.log(addOne(5)); //run without any error --> because of hoisting - function declaration is hoisted to the top of the scope.

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5)); //gives error because addTwo is a function expression and it is not hoisted like function declaration.

const addTwo = function (num) {
  return num + 2;
};
