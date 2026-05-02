// IIFE --> immediately invoked function expression

//iife is used to avoide global scop pollutions to imediatelty invoked the function.

// function connectDB() {
//   console.log("database connected sucessfully.");
// }

// connectDB();

(function connectDB() {
  console.log("database connected sucessfully.");
})();

//************************************** */

((name) => {
  console.log(`database connected sucessfully by ${name}.`);
})("Raees");
