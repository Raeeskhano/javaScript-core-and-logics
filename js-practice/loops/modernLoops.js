//for of --> Array specific loop, it is used to iterate over the elements of an array. It is a more modern and concise way to loop through arrays compared to traditional for loops.

//["", "", ""]
let myArr = ["superman", "batman", "spiderman", "ironman"];

for (const element of myArr) {
  //   console.log(element);
}

//[{}, {}, {}]
let users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 35 },
];

for (const user of users) {
  //   console.log(user.name, user.age);
}

//string --> "Hello world"

let Greeting = "Hello world";

for (const greet of Greeting) {
  //   console.log(greet);
}

//*******************MAPS in js************************ */
//maps are a collection of key-value pairs where the keys can be of any data type. They are similar to objects but provide additional features such as maintaining the order of elements and allowing keys of any type.

let myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");

// console.log(myMap);

for (const [key, value] of myMap) {
  //   console.log(`${key}: ${value}`);
}

//******************for in loops for objects***********************/

let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in person) {
  //   console.log(`${key}: ${person[key]}`);
}

//******************for in loops for Arrays***********************/

let programming = ["JavaScript", "Python", "Java", "C++"];

for (const key in programming) {
  //   console.log(key);
  //   console.log(programming[key]);
  //   console.log(`${key}: ${programming[key]}`);
}

//conclusion: for of loops are used to iterate over the elements of an array or a string, while for in loops are used to iterate over the properties of an object or the indices of an array.
