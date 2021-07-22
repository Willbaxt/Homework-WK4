var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answersButtonEl = document.getElementById("answer-buttons");
var timerEl = document.getElementById("timer");

let correctAnswers =false;
let randomQuestions;
let currrentQuestion;

const questions = [
  {
    question: "what does html stand for?",
    answers: [
      {
        text: "how to make language",
        correct: false,
      },
      {
        text: "hypertext markup language",
        correct: true,
      },
      {
        text: "hipster tools marketing lockup",
        correct: false,
      },
      {
        text: "howards totaly made up language",
        correct: false,
      },
    ],
  },
  {
    question: "what does CSS stand for?",
    answers: [
      {
        text: "Castle sand supreme",
        correct: false,
      },
      {
        text: "Casscading style sheets",
        correct: true,
      },
      {
        text: "Cool style sheets",
        correct: false,
      },
      {
        text: "Carols salad stands alone",
        correct: false,
      },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      {
        text: "<script>",
        correct: true,
      },
      {
        text: "<js>",
        correct: false,
      },
      {
        text: "<javascript>",
        correct: false,
      },
      {
        text: "<scripting>",
        correct: false,
      },
    ],
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: [
      {
        text: "varible carname",
        correct: false,
      },
      {
        text: "varible Carname",
        correct: false,
      },
      {
        text: "V carName",
        correct: false,
      },
      {
        text: "var carName",
        correct: true,
      },
    ],
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
      {
        text: "x",
        correct: false,
      },
      {
        text: "*",
        correct: false,
      },
      {
        text: "-",
        correct: false,
      },
      {
        text: "=",
        correct: true,
      },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      {
        text: "function my function",
        correct: false,
      },
      {
        text: "function:myFunction()",
        correct: false,
      },
      {
        text: "function = myFunction()",
        correct: true,
      },
      {
        text: "funct.myfunction",
        correct: false,
      },
    ],
  },
];

startButton.addEventListener("click", startQuiz);
answersButtonEl.addEventListener("click", nextQuestion);

function startQuiz() {
  startButton.classList.add("hide");
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  currrentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  currrentQuestion = 1;
  totalTime = 150;
  var startTimer = setInterval(function () {
    totalTime--;
    timerEl.textContent = totalTime;
    if (totalTime <= 0) {
      clearInterval(startTimer);
      if (currenQuestionIndex < questions.length - 1) {
        
      }
    }
  }, 1000);

  nextQuestion();
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answersButtonEl.appendChild(button);
    
  });
}

function nextQuestion() {
  resetState();
  showQuestion(randomQuestions[currrentQuestionIndex]);
}

function resetState() {
  while (answersButtonEl.firstChild) {
    answersButtonEl.removeChild(answersButtonEl.firstChild);
  }
}

function selectAnswer() {
  if ((questions.answers = true)) {
    currrentQuestionIndex++;
    nextQuestion(currrentQuestion++);
  
}
}
