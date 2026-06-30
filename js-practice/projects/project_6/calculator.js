let current = "";
let prev = "";
let operator = null;

function pressNum(digit) {
  //limit length to prevent overflow
  if (current.length >= 9) return;

  //append digit to current string
  current = current + digit;

  //update dispaly

  updateDisplay();
}

function clearCalc() {
  current = "";
  prev = "";
  operator = null;
  updateDisplay();
}

function pressDot() {
  //allow only one decimal
  if (current.includes(".")) return;
  //if current is empty then, start with "0."
  current += current ? "." : "0.";

  updateDisplay();
}

function pressOperator(op) {
  // nothing type --> return
  if (!current) return;
  //if chain the operators like 5+3* so, solve current first
  if (prev) pressEqual();

  //save current number
  prev = current;
  //save which operator
  operator = op;
  //clear for next number
  current = "";

  //update dsplay
  updateDisplay();
}

function pressEqual() {
  //check current and operator
  if (!current || !operator) return;
  //convert current and prev into parseFloat()
  const a = parseFloat(prev);
  const b = parseFloat(current);
  //object as a lookup file
  const result = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b,
    "%": (a * b) / 100,
  };

  current = String(result[operator]);
  prev = "";
  operator = null;

  updateDisplay();
}

function pressPercentage() {
  const currentVal = parseFloat(current);

  if (prev !== null && operator) {
    // e.g. 200 + 10% => 10% of 200 = 20
    const percentValue = (prev * currentVal) / 100;
    current = String(percentValue);
  } else {
    // no previous operation, just divide by 100
    current = String(current / 100);
  }

  updateDisplay();
}

function updateDisplay() {
  // Show the expression at the top (e.g. "5 +")
  const opSymbols = { "+": "+", "-": "−", "*": "×", "/": "÷", "%": "%" };
  const exprText = prev + (operator ? " " + opSymbols[operator] : "");

  document.getElementById("expression").textContent = exprText;

  // Show the current number (or prev if current is empty)
  document.getElementById("current").textContent = current || prev || "0";
}
