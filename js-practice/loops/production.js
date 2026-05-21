//***********************************************************************************/
//****************************Production level loops*********************************/
//***********************************************************************************/

//forEach loop --> it is a method available on arrays that allows you to execute a provided function once for each array element. It is a more modern and concise way to loop through arrays compared to traditional for loops. it cannot return value.

let Heros = ["superman", "batman", "spiderman", "ironman"];
Heros.forEach((element) => {
  //   console.log(element);
});

function printMe(value, index, arr) {
  console.log(value, index, arr);
}

Heros.forEach(printMe);

//************************************/

let mySkills = [
  { languageName: "javaScript", Experience: "3 years of experience" },
  { languageName: "typescript", Experience: "2 years of experience" },
  { languageName: "python", Experience: "1 years of experience" },
];

mySkills.forEach((items) => {
  console.log(`i have ${items.Experience} in ${items.languageName}`);
});

const skills = mySkills.forEach((items) => {
  return items; //for each loop do not return any value.
});

//map loop --> it is a method available on arrays that creates a new array populated with the results of calling a provided function on every element in the calling array. It is used to transform the elements of an array and create a new array based on the transformation.it returns values.

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numb = myNums.map((num) => {
  return num + 10;
});

console.log(numb);

//filter --> it is a method available on arrays that creates a new array with all elements that pass the test implemented by the provided function. It is used to filter out elements from an array based on a specified condition and create a new array with only the elements that satisfy the condition. it returns values.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = nums.filter((num) => {
  return num > 4;
});

console.log(newNum);

//reduce --> it is a method available on arrays that executes a reducer function on each element of the array, resulting in a single output value. It is used to reduce an array to a single value based on a specified operation, such as summing all elements or finding the maximum value.

const shopcart = [100, 200, 300, 400, 500, 6000];
const totalPrice = shopcart.reduce((acc, curr) => {
  return acc + curr;
}, 0); //0 is the initial value of the accumulator
console.log(totalPrice); //7500 will come as a result because it will add all the elements of the array and return the total price of the shopcart.



//cahining--> combining methods together to perform multiple operations on an array in a single line of code. It allows you to apply multiple transformations or filters to an array without the need for intermediate variables.

let myNumbs = [1, 2, 3, 4, 5, 6, 7, 8];

let newNums = myNumbs
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(newNums);
