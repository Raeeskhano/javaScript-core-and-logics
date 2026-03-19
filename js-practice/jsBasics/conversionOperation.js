let score = "33";

// console.log(typeof score);

const converted = Number(score);
// console.log(typeof converted);

//33 -> 33
//"33abc" -> NaN
//true -> 1

let isLoggedIn = 1;

let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);

//1= true
//0 = false
//"" = false
//"raees" = true

let RandomNum = 33;

let stringNum = String(RandomNum);
// console.log(stringNum);
// console.log(typeof stringNum);

//**************************Operations********************************/

const value = 3;
const negValue = -value;

console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "Raees";
let str2 = "khan";

let str3 = str1 + str2;
// console.log(str3);

// console.log(1 + "2");
// console.log("2" + 1);
// console.log(1 + 2 + "3"); //first perform operation and then add string
// console.log("3" + 1 + 2); //first string makes everything string

console.log("\nPost-increment inside loop:");
for (let i = 0; i < 5; i++) {
  console.log("i++ returns:", i++);
}

console.log("\nPre-increment inside loop:");
for (let i = 0; i < 5; i++) {
  console.log("++i returns:", ++i);
}
