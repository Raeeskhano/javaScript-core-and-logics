//if statments

if (true) {
  //code will run within this block
}

if (false) {
  //code will not run within this block
}

//*******************************/

//comparision operators --> <, >, <=, >=, ==, ===, !=, !==, thses operators will compare two value (conditions) and return a boolean value (true or false).

if (5 > 3) {
  console.log("code executed because of condition is evaluated as true.");
}

//**********************************/
//if else statement

const temperature = 30;

if (temperature === 30) {
  console.log("Temperature is normal, wooo hoo.");
} else {
  console.log("Temperature is too hot, uffff.");
}

const points = 200;

if (points > 100) {
  const power = "fly";
  console.log(`you can ${power}`);
}

//***********************************************/

//else if statement

const score = 100;

if (score >= 90) {
  console.log("you got A grade.");
} else if (score >= 80) {
  console.log("you got B grade.");
} else {
  console.log("you need to work harder.");
}

//***********************************************/

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  // in case of && both conditions should be true to execute the code block.
  console.log("you can buy any course you want 😊");
}

//************************************************/

const loggedInByGoogle = true;
const loggedInByEmail = false;

if (loggedInByEmail || loggedInByGoogle) {
  // in case of || only one condition should be true to execute the code block.
  console.log("you can access your account.");
}
 