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

//rest operator -> it is used to collect all the remaining elements into an array. it is denoted by three dots (...).

function ItemsInCart(item1, item2, ...item) {
  console.log(item1);
  console.log(item2);
  return item; //it will return an array of items in the cart.
  // return `you have ${item.length} items in your cart`;
}

console.log(ItemsInCart("socks", "shoes", "pants", "shirts", "baggy trousers"));

//***********************************************/

const user = {
  name: "Raees",
  budget: 9999999999,
};

function handleUserObject(anyObject) {
  console.log(
    `the name of the user is "${anyObject.name}" and his budget is "${anyObject.budget}"`,
  );
}

handleUserObject(user);
handleUserObject({
  name: "Raees",
  budget: 9999999999,
});

//***********************************************

const newArray = [100, 200, 300, 400];

function getSecondElement(gettingArray) {
  return gettingArray[1];
}

console.log(getSecondElement(newArray));
console.log(getSecondElement([100, 200, 300, 400]));

//***********************************************/

function loginMessage(username = "jon") {
  //here in parameter i create a default username "jon" and if user provide username so it will override the default username.
  if (!username) {
    console.log("please provide username first.");
  } else {
    return `${username} just logged in`;
  }
}

console.log(loginMessage("Raees khan"));
console.log(loginMessage());
