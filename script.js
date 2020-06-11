const startButtonEl = document.querySelector("#start-button");
const startPageEl = document.querySelector("#start-page");
const questionEl = document.querySelector("#questionHeader");
const optionsEl = document.querySelector("#options");
const questionPageEl = document.querySelector("#quiz");
var timerEl = document.querySelector("#timer");
const allButtonsEl = document.querySelectorAll(".buttonOpt");

// allButtonsEl.addEventListener("click", function(){
//   generateQuestions();
// });
startButtonEl.addEventListener("click", function (event) {
  //firstQuestionEl.classList.add("toggle-first-class");
  // event.preventDefault();
  console.log("Button was clicked");
  startPageEl.style.display = "none";
  generateQuestions();
  setTimer();
});
questionIndex = 0;
// This function of the code was inspired code from https://github.com/lbernadel/Code-Quiz
function generateQuestions() {
  questionPageEl.style.display = "block";
  //starts the index of the object at position 0 to display the first question when the start button is clicked
  //this defines the correct answer as the answer stored in "an" in the object at index 0
  correctAnswer = questions[questionIndex].an;
  //this updates the stored text from the HTML to display the question in the object at index 0
  questionEl.textContent = questions[questionIndex].q;
  optionsEl.innerHTML = "";
  //this helps define and set what array the options are supposed to be pulled out of so they aren't pulled out of the next array every single time
  var choicesFromArray = questions[questionIndex].option;
  //optionsEl.textContent = questions[questionIndex].option;
  // console.log(optionsEl);
  for (var i = 0; i < 4; i++) {
    questionIndex = questionIndex + 1;
    console.log("create button!");
    var choicesButton = document.createElement("button");
    //sets the button text to be whatever the options from the choicesFromArray were
    choicesButton.innerHTML = choicesFromArray[i];
    choicesButton.setAttribute("class", "btn btn-primary buttons");
    choicesButton.style.margin = "20px";
    console.log(choicesButton);
    buttons = optionsEl.append(choicesButton);
  }
}
//TIMER TIME!
secondsLeft = 75;
function setTimer() {
  var timerInterval = setInterval(function () {
    console.log("Timer set");
    secondsLeft--;
    timerEl.textContent = " " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval();
    }
  }, 1000);
}

//my beautiful question object!
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
