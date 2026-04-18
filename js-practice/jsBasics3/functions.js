//function are resusable block of code that perform a specific task. it like packaging lines of code together and giving it a name so that you can use it whenever you want without having to rewrite the same code again and again.

// console.log("R");
// console.log("A");
// console.log("E");
// console.log("E");
// console.log("S");

function printMyName() {
  console.log("R");
  console.log("A");
  console.log("E");
  console.log("E");
  console.log("S");
}

printMyName; //it is a refrence to the function, it will not execute the function.
printMyName(); //it will execute the function.

//************************************/

// function addTwoNumbers(num1, num2) {
//   //paramters--> it can be declare while function definition. its to be taken values like axpecting something is comming
//   const sum = num1 + num2;
//   console.log(sum);
// }

addTwoNumbers(2, 4); //arguments--> it can be declare while function calling. its to be given values like passing values to the function.

// const result = addTwoNumbers(2, 4);
// console.log("result: ", result); //it shows result: undefined--> because because function cannot return a value.

function addTwoNumbers(num1, num2) {
  //   const result = num1 + num2;
  //   return result; //it will return the value to the function call.

  return num1 + num2; //we can also return the value directly without storing it in a variable.
}

const result = addTwoNumbers(2, 4);
console.log("result: ", result);

//**********************************************/

function loginUser(username) {
  return `${username} just logged in`;
}

console.log(loginUser("Raees"));

//5:54:00
