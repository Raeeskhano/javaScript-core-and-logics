let name = "Raees khan";
let repoCount = 40;

//console.log(name + " " + repoCount + " score"); //not recommended

//***********string interpolation**********/
console.log(`my name is ${name} and my repo score is ${repoCount}`); //this is recommended

//*********methods and functions**************/
const myName = new String("Raees");

console.log(myName);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf("s"));

console.log(myName.substring(0, 3));
console.log(myName.slice(2, 4));
console.log(myName.split(""));

let newString = "    khano   ";
console.log(newString);
console.log(newString.trim()); //remove spaces from both sides
console.log(newString.trimStart()); //remove spaces from start
console.log(newString.trimEnd()); //remove spaces from end

const url = "https://raeeskhan.com/raees%20khan";
console.log(url);
console.log(url.replace("%20", "-"));

console.log(url.includes("%20")); //return true if exists

console.log(url.blink());

console.log(url.concat(myName));
