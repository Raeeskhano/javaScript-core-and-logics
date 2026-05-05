const userEmail = "raees@google.com";
// const userEmail = ""; //falsy value
// const userEmail = []; //truthy value
// const userEmail = null; //falsy value
// const userEmail = undefined; //falsy value

if (userEmail) {
  console.log("hello user");
} else {
  console.log("please provide email");
}

//Falsy values: false, 0, "", null, undefined, NaN

//Truthy values: 1, "0", " ", [], {}, function(){}, true

const Email = [];

if (Email.length === 0) {
  console.log("array is empty");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("object is empty");
}

//******************************************/

//Nullish coalescing operator (??): null or undefined
//it is used to provide a default value when the left-hand side is null or undefined, and uses in database and API calls handling.
let value;
// value = 5 ?? 10; //5
// value = null ?? 10; //10
value = undefined ?? 10; //10

console.log(value);

//***********************************************/

//ternary operator: condition ? expressionIfTrue : expressionIfFalse

const isLoggedIn = true;

const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
