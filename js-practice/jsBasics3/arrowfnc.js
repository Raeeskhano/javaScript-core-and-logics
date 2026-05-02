//***********This keyword********************/

const user = {
  username: "Raees khan",
  profession: "Software Engineer",

  message: function () {
    console.log(this); //this will refer to the user object and its context.
    return `the username is ${this.username} and profession is ${this.profession}`; //here (this) is used to dynamically access the peoperities of user object.
  },
};

console.log(user.message()); //current context
user.username = "Haris"; //context change for username
user.profession = "Data scientist"; //context change for profession
console.log(user.message()); //changed context

console.log(this); //because of global context, this will refer to the global empty object {} in case of node js and window object in case of browser.

//**********************************/

function pro() {
  let username = "Raees";
  console.log(this);
  console.log(this.username); //undefined because this keyword is used for objects and here we are in a function context, so it will not find the username property in the global object and return undefined.
}

pro();

//**********************Arrow function************************

const arroeFunction = () => {
  const username = "Raees";
  console.log(this.username);
};

arroeFunction();

//*********************explicit return*********************/
// const addNums = (num1, num2) => {
//   return num1 + num2; //explicit return means we have to use return keyword to return the value from the function.
// };

// console.log(addNums(2, 4));

//*******************implicit return******************/

// const addNums = (num1, num2) => num1 + num2;
const implicit = () => ({ username: "Raees" }); //we can also use parentheses to retun the value implicitly without using return keyword.

console.log(implicit());

//***********************************************/

const myarr = [1, 2, 33, 4, 5, 5];
myarr.forEach((num) => console.log(num));

