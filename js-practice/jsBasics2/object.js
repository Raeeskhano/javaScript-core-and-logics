//***********************singleton*************************
// Object.create(); //creating object through constructor method.

// const obj = new Object(); //singleton.
const obj = {}; //not singleton

obj.id = 1;
obj.name = "Raees";
obj.email = "Raeeskhan@gmail.com";

// console.log(obj);

const myUsers = {
  email: "random@gmail.com",
  userName: {
    fullName: {
      firstName: "Raees",
      lastName: "khan",
    },
  },
};

// console.log(myUsers.userName.fullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

console.log(Object.assign({}, obj1, obj2)); //merging objects but rarely use

const obj3 = { ...obj1, ...obj2 }; //mering object method, mostly used and recommended..
console.log(obj3);

const users = [
  { id: "1", email: "a@google.com" },
  { id: "2", email: "b@google.com" },
];
console.log(users[1].email);

//**********************object literal:*******************

const mySym = Symbol("key");

const user = {
  name: "Raees",
  //   "fullName": "Raees khan",
  age: 23,
  [mySym]: "key1", //we can use symbol as a key in object.
  location: "Mandian, officer colony, street no: 04",
  email: "raees@google.com",
  isLogedIn: true,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
};

// console.log(user.age);
// console.log(user["age"]); //we use "" because keys are tracked as a string in object.
// console.log(user["fullName"]); //we cannot access it with a dot notation.
// console.log(user[mySym]);

user.email = "raees_new@google.com";
// console.log(user);

// Object.freeze(user); //we cannot change the object after freezing it.

user.email = "raees_frozen@google.com";

// console.log(user);

user.hello = function () {
  console.log(`Hello ${this.name}!`);
};

// user.hello();

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("name"));


//4:21:00