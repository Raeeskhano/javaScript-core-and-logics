let RandomNum = Math.floor(Math.random() * 100) + 1;

const userGuess = document.querySelector("#guessField");
const submitGuess = document.querySelector("#subt");
const PrevGuess = document.querySelector("#guesses");
const remainingGuess = document.querySelector("#lastResult");
const lowORhigh = document.querySelector(".Result");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let guessCount = 1;
let PlayGame = true;

let prevGuessSlot = [];

if (PlayGame) {
  submitGuess.addEventListener("click", (e) => {
    e.preventDefault();
    const userGuessValue = parseInt(userGuess.value);
    console.log(userGuessValue);
    validateGuess(userGuessValue);
  });
}

validateGuess = (userGuessValue) => {
  if (isNaN(userGuessValue) || userGuessValue < 1 || userGuessValue > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    prevGuessSlot.push(userGuessValue);

    if (guessCount === 11) {
      displayGuess(userGuessValue);
      displayMessage(`Game over, Random number was ${RandomNum}`);
      endGame();
    } else {
      displayGuess(userGuessValue);
      checkGuess(userGuessValue);
    }
  }
};

function checkGuess(userGuessValue) {
  if (userGuessValue === RandomNum) {
    displayMessage("you guessed it right");
    endGame();
  } else if (userGuessValue < RandomNum) {
    displayMessage("you guessed TOO low");
  } else if (userGuessValue > RandomNum) {
    displayMessage("you guessed TOO high");
  }
}

function displayGuess(userGuessValue) {
  userGuess.value = "";
  PrevGuess.innerHTML = prevGuessSlot.join(" ");
  guessCount++;
  remainingGuess.innerHTML = `${11 - guessCount}`;
}

function displayMessage(message) {
  lowORhigh.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userGuess.value = "";
  userGuess.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  lowORhigh.appendChild(p);

  PlayGame = false;

  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", () => {
    RandomNum = Math.floor(Math.random() * 100) + 1;
    prevGuessSlot = [];
    guessCount = 1;
    PrevGuess.innerHTML = "";
    remainingGuess.innerHTML = `${11 - guessCount}`;

    userGuess.removeAttribute("disabled");
    startOver.removeChild(p);
    PlayGame = true;
  });
}
