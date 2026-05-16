//for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  // console.log(`Element are: ${element}`);
}

// console.log(element); // cannot access outside the loop because of block scope.

//***********nested loops***********************/

for (let i = 0; i <= 3; i++) {
  // console.log(`outer loop value: ${i}`);
  for (let j = 0; j <= 3; j++) {
    // console.log(`inner loop value: ${j}, and outer loop value: ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

//************************************ */
//print the table of two using for loop
for (let i = 0; i <= 100; i++) {
  const twoTable = 2 * i;
  // console.log(`2 * ${i} = ${twoTable}`);
}

//*********************************** */

let myArr = ["superman", "batman", "spiderman", "ironman"];

for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element);
}

//*******************Break and continue****************************/

for (let index = 1; index < 20; index++) {
  if (index === 5) {
    console.log("Favorite number Detected.");
    break; //it will stoop the loop when index is 5
  }
  console.log(`value of i is ${index}`);
}

for (let index = 1; index < 20; index++) {
  if (index === 5) {
    console.log("Favorite number Detected.");
    continue; //it will skip the current iteration when index is 5 and continue with the next iteration
  }
  console.log(`value of i is ${index}`);
}
