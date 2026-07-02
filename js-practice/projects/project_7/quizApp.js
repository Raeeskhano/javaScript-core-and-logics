const questions = [
  {
    q: "What does typeof null return in JavaScript?",
    options: ["null", "object", "undefined", "number"],
    answer: "object",
  },
  {
    q: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Number", "Boolean", "Character"],
    answer: "Character",
  },
  {
    q: "What is the output of the following code: console.log(0.1 + 0.2 === 0.3);",
    options: ["true", "false", "undefined", "NaN"],
    answer: "false",
  },
  {
    q: "Which method is used to convert a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()",
    ],
    answer: "JSON.parse()",
  },
  {
    q: "What is the purpose of the 'use strict' directive in JavaScript?",
    options: [
      "To enable strict mode, which helps catch common coding mistakes",
      "To allow the use of undeclared variables",
      "To enable automatic semicolon insertion",
      "To disable the use of 'this' keyword",
    ],
    answer: "To enable strict mode, which helps catch common coding mistakes",
  },
];

let currentQuestionIndex = 0;
let score = 0;

console.log(questions);

function loadQuestion() {
  //get current questions
  const currentQuestion = questions[currentQuestionIndex];

  //update question text
  document.querySelector(".questionText").textContent = currentQuestion.q;

  //build dynamic options using map and template literals and join it to a string
  const buttonHTML = currentQuestion.options
    .map((option, index) => {
      return `<button onclick="checkAnswer(this.textContent.trim())" class="option-btn border-1 border-gray-500 py-1 px-2 rounded w-full text-start hover:bg-gray-900 transition-all duration-100 cursor-pointer">
      ${option}
      </button>`;
    })
    .join("");

  //select elements and update innerHTML
  document.querySelector(".options").innerHTML = buttonHTML;

  //upgrade progress counter
  document.querySelector(".progressQuestion").textContent =
    `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function checkAnswer(chose) {
  //compare chosen answer with correct answer
  let correct = questions[currentQuestionIndex].answer;
  //get all buttons
  const buttons = document.querySelectorAll(".option-btn");
  //loop through buttons and disable them
  buttons.forEach((button) => {
    button.disabled = true;
    const txt = button.textContent.trim();
    if (txt === correct) {
      // always highlight the correct answer
      button.style.backgroundColor = "green";
    } else if (txt === chose) {
      // only mark the chosen wrong answer as red
      button.style.backgroundColor = "red";
    } else {
      // leave other buttons unstyled
      button.style.backgroundColor = "";
    }
  });

  //increment score if correct

  if (chose === correct) score++;
  //wait for 1 second and load next question

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  // Conditional message based on score
  let message;
  if (percent >= 80) {
    message = "Excellent! You really know JS!";
  } else if (percent >= 50) {
    message = "Good effort! Keep practicing.";
  } else {
    message = "Keep studying — you got this!";
  }

  // Replace entire quiz UI with results
  document.querySelector(".QuizUi").innerHTML = `
    <h2>${score}/${total}</h2>
    <p>${message}</p>
    <button onclick="restartQuiz()" class="px-2 py-2 bg-gray-800">Try Again</button>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0; // reset state
  score = 0;
  loadQuestion(); // re-render from scratch
}

// initialize quiz UI
loadQuestion();
