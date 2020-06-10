const startButtonEl = document.querySelector("#start-button");
const startPageEl = document.querySelector("#start-page");
const questionEl = document.querySelector("#questionHeader");
// const nxtBtn = document.querySelector("#next-button");
// const firstQuestionEl = document.querySelector("#questions");
// const questionsArray = [
//   "1: Commonly Used data types DO NOT Include:",
//   "he condition in an if/ else statement is enclosed within ___.",
// ];

// const optionOneArray = ["a", "b", "c", "d"];

startButtonEl.addEventListener("click", function (event) {
  //firstQuestionEl.classList.add("toggle-first-class");
  event.preventDefault();
  console.log("Button was clicked");
  startPageEl.style.display = "none";
  generateQuestions();
});

questionIndex = -1;

function generateQuestions() {
  questionIndex = questionIndex + 1;
  correctAnswer = questions[questionIndex].an;

  questionEl.textContent = questions[questionIndex].q;
}

// nxtBtn.addEventListener("click", function (event) {
//   console.log("nxt Button was clicked");

//   generateQuestion();
// });

// function generateQuestion() {
//   const questionOne = document.querySelector("#questions");
//   // const q = `<h1>1: Commonly Used data types DO NOT Include:</h1>`;
//   questionOne.innerHTML = `<h1>${questionsArray[0]}</h1>`;
//   generateOptions();
// }

// function generateOptions() {
//   const optionOne = document.createElement("button");
//   optionOne.textContent = optionOneArray[0];
//   const optionTwo = document.createElement("button");
//   optionTwo.textContent = optionOneArray[1];
//   const optionThree = document.createElement("button");
//   optionThree.textContent = optionOneArray[2];
//   const optionFour = document.createElement("button");
//   optionFour.textContent = optionOneArray[3];

//   document.body.appendChild(optionOne);
//   document.body.appendChild(optionTwo);
//   document.body.appendChild(optionThree);
//   document.body.appendChild(optionFour);
// }

// const q = [
//   {
//     q1: "what is this",
//     option: ["a", "b", "c", "d"],
//     an: "",
//   },
//   {
//     q2: "what is this 2",
//     option: ["a", "b", "c", "d"],
//     an: "",
//   },
// ];

const questions = [
  {
    q: "Commonly Used Data Types DO NOT include",
    option: ["strings", "booleans", "alerts", "numbers"],
    an: "alerts",
  },
  {
    q: "The condition of an if/else statement is enclosed with",
    option: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    an: "parenthesis",
  },
  {
    q: "Arrays in JavaScript can be used to store",
    option: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    an: "all of the above",
  },
  {
    q:
      "String values must be enclosed within ____ when being assigned to variables.",
    option: ["commas", "curly brackets", "quotes", "parenthesis"],
    an: "quotes",
  },
  {
    q:
      "A very useful tool used during development and debugging for printing content to the debugger is",
    option: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    an: "console.log",
  },
];
