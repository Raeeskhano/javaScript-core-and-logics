//********Premitive datatypes************/

//number -> 2 to power 53
//bigint -> higher number
//string -> ""
//boolean -> true/false
//null -> standalone value eg; when we request a server for temperatur but it can response so we will prepered null value not zero or other default values.
//undefined -> declared variable but value not assigned
//symbol -> unique
let id = Symbol("123");
let id2 = Symbol("123");

console.log(id === id2); // falsd--> because symbol create it unique

//*******Refrences (Non premitive datatypes)***********

//object
console.log(typeof undefined); //undefined
console.log(typeof null); //object

let obj = {
  name: "Raees",
  age: 24,
  profession: "developer",
};

//array

let heros = ["superhero", "spiderman", "thor"];

//functions

const student = function () {
  console.log("i am a student");
};

//*******************************Memory allocation in js********************************/
//stack memory (primitive)
//primitive datatypes create copy and change occure in copy
let myName = "Raees khan";
let anotherName = myName;

anotherName = "Raees programmer";

console.log(myName);
console.log(anotherName);

//Heap memory (non primitive)
//non premitive datatypes creates passes refrence and changes occure in original value.

let userOne = {
  email: "raeeskhan@gmail.com",
  id: "01",
};

let userTwo = userOne;
userTwo.email = "khan@google.com";

console.log(userOne.email);
console.log(userTwo.email);
