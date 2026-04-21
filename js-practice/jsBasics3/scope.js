//scope in javascript --> {}

//global scop --> accessible anywhere in the code.
var c = 300;
let a = 400;

if (true) {
  //blocked scope --> accessible only within the block.
  let a = 5;
  const b = 10;
  var c = 15;

  console.log("inner scopoed value of a : ", a);
}

console.log("Global value of a : ", a);
// console.log(b);
console.log(c);
