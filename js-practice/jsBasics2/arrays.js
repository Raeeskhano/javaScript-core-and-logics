const numbArray = [1, 2, 3, 4, 5];
const heros = ["superman", "spiderman"];

const arr1 = new Array(1, 2, 3, 4, 5);

console.log(numbArray[0]);
console.log(heros[0]);
console.log(arr1[0]);

//*************Arrays methods**************/

numbArray.push(6); //add item to the end
console.log(numbArray);

numbArray.pop(); //remove item from the end
console.log(numbArray);

numbArray.unshift(0); //add item to the start
console.log(numbArray);

numbArray.shift(); //remove item from the start


console.log(numbArray.includes(2)); //check if the array includes a value or not
console.log(numbArray.indexOf(2)); //return the index of the value in the array.

const newArr = numbArray.join(); //join all the element of array into a string
console.log(newArr);

const newArr2 = newArr.concat([6,7,7,8]); //combine two or more arrays
console.log(newArr2);
console.log(numbArray);

//slice And splice

console.log("original array", numbArray);
console.log("sliced array", numbArray.slice(1, 3)); //return the shallow copy of a portion of an array into a new array object slected from start to end (end not included), the original array will not be modified.
console.log(numbArray);

console.log("splice array", numbArray.splice(1, 3, 10, 11, 12)); //change the contents of an array by removing or replacing existing elements and/or adding new elements in place, it return the array of removed elements, the original array will be modified.
console.log(numbArray);

