const userInfo = {
  userName: "Raees",
  logInCount: 8,
  signedIn: true,
  getuserDetails: function () {
    // console.log("user details found in Db");
    // console.log(`username is ${this.userName}`);
    console.log(this);
  },
};

// console.log(userInfo.userName);
// console.log(userInfo.getuserDetails());

// ********Constructor function************

//A constructor function is a regular function used to create multiple objects with the same structure. Before ES6 classes, constructor functions were the main way to implement object-oriented programming in JavaScript.
//its refrence to own constructor functiion
//always start with capital by convension

//this --> object {}

// the new keyword is a constructor function
// const promiseOne = new Promise();
// const date = new Date();

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.greetings = function () {
    console.log(`Welcome ${this.name}`);
  };
}

const userOne = new User("Raees", "rk@gmail.com", "12345");
const userTwo = new User("Ehtisham", "eh@gmail.com", "1234567");

// console.log(userOne);
// console.log(userOne.name);

//steps;
// 1- new keyword generate empty object instance
//2- calls the constructor function through (new) keyword and pack the        argument and give us.
//3- arguments are injected to object through (this) keyword
//4- recieved arguments in function

console.log(userOne.constructor);
