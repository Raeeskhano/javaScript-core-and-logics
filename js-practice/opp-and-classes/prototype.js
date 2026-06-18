// let name = "Raees    ";
// let channel = "web termite";

// console.log(name.trueLength)

let Heros = ["thor", "spiderman"];

let heroPower = {
  thor: "hummer",
  spiderman: "sling",

  getspidyPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Raees = function () {
  console.log(`Raees is present in objects`);
};

Array.prototype.Raees = function () {
  console.log(`Raees is present in Arrays`);
};

heroPower.Raees();
Heros.Raees();

//Prototypal inheritance

let user = {
  name: "user1",
};

let teacher = {
  isAvailable: false,
  teach: "js",
};

let teacherSupport = {
  task1: "create assignment",
  task2: "ready study materials",
};

Object.setPrototypeOf(teacherSupport, teacher);
