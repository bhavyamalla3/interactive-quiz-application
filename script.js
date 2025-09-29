const quizData = [
  {
    question: "Which HTML element is used to include JavaScript code?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<js>", correct: false },
      { text: "<javascript>", correct: false },
      { text: "<code>", correct: false },
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
    ]
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    answers: [
      { text: "style", correct: true },
      { text: "class", correct: false },
      { text: "styles", correct: false },
      { text: "font", correct: false },
    ]
  },
  {
    question: "Which CSS property controls the spacing between letters?",
    answers: [
      { text: "letter-spacing", correct: true },
      { text: "word-spacing", correct: false },
      { text: "text-spacing", correct: false },
      { text: "line-height", correct: false },
    ]
  },
  {
    question: "What does the 'alt' attribute in an <img> tag specify?",
    answers: [
      { text: "Alternative text for the image", correct: true },
      { text: "Alignment of the image", correct: false },
      { text: "URL of the image", correct: false },
      { text: "Animation effect", correct: false },
    ]
  },
  {
    question: "What is the primary language used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "JavaScript", correct: false },
      { text: "Python", correct: false },
    ]
  },
  {
    question: "Which tag is used to define a hyperlink in HTML?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<hyper>", correct: false },
    ]
  },
  {
    question: "Which CSS property is used to change the text color?",
    answers: [
      { text: "font-style", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "font-color", correct: false },
    ]
  },
  {
    question: "What does 'DOM' stand for?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Model", correct: false },
      { text: "Digital Ordinance Model", correct: false },
      { text: "Desktop Object Model", correct: false },
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "<!-- -->", correct: false },
      { text: "#", correct: false },
      { text: "/* */", correct: true },
    ]
  },
  {
    question: "Which HTML element is used for the largest heading?",
    answers: [
      { text: "<h1>", correct: true },
      { text: "<head>", correct: false },
      { text: "<heading>", correct: false },
      { text: "<h6>", correct: false },
    ]
  },
  {
    question: "Which CSS property is used to make text bold?",
    answers: [
      { text: "font-weight", correct: true },
      { text: "text-style", correct: false },
      { text: "font-style", correct: false },
      { text: "font-bold", correct: false },
    ]
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    answers: [
      { text: "<break>", correct: false },
      { text: "<lb>", correct: false },
      { text: "<br>", correct: true },
      { text: "<line>", correct: false },
    ]
  },
  {
    question: "Which JavaScript method is used to select an element by its ID?",
    answers: [
      { text: "getElementById()", correct: true },
      { text: "querySelectorAll()", correct: false },
      { text: "getElementsByClassName()", correct: false },
      { text: "getElementByClass()", correct: false },
    ]
  },
  {
    question: "Which HTML element defines the title of a document?",
    answers: [
      { text: "<title>", correct: true },
      { text: "<head>", correct: false },
      { text: "<meta>", correct: false },
      { text: "<header>", correct: false },
    ]
  },
  {
    question: "What is the correct CSS syntax to select an element with class 'menu'?",
    answers: [
      { text: ".menu", correct: true },
      { text: "#menu", correct: false },
      { text: "*menu", correct: false },
      { text: "menu", correct: false },
    ]
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    answers: [
      { text: "alt", correct: true },
      { text: "title", correct: false },
      { text: "src", correct: false },
      { text: "href", correct: false },
    ]
  },
  {
    question: "Which CSS property is used to change the background color?",
    answers: [
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "bgcolor", correct: false },
      { text: "background", correct: false },
    ]
  },
  {
    question: "What does the 'float' property do in CSS?",
    answers: [
      { text: "Positions elements to the left or right", correct: true },
      { text: "Changes the font style", correct: false },
      { text: "Adds margin around elements", correct: false },
      { text: "Specifies element width", correct: false },
    ]
  },
  {
    question: "Which tag is used to create a numbered list in HTML?",
    answers: [
      { text: "<ol>", correct: true },
      { text: "<ul>", correct: false },
      { text: "<li>", correct: false },
      { text: "<list>", correct: false },
    ]
  }
];

// --- Added code for Start button functionality ---

// Screen elements
const homeScreen = document.getElementById('home-screen');
const registerScreen = document.getElementById('register-screen');
const quizScreen = document.getElementById('quiz-screen');

const startBtn = document.getElementById('start-btn');
const registerForm = document.getElementById('register-form');

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const scoreSection = document.getElementById('score-section');

let currentQuestionIndex = 0;
let score = 0;
let user = { name: '', email: '' };

// Helper: Show one screen, hide others
function showScreen(screen) {
  [homeScreen, registerScreen, quizScreen].forEach(s => {
    s.classList.remove('active-screen');
  });
  screen.classList.add('active-screen');
}

// START BUTTON - move from Home -> Register
startBtn.addEventListener('click', () => {
  showScreen(registerScreen);
});

// REGISTER FORM SUBMIT - move Register -> Quiz
registerForm.addEventListener('submit', e => {
  e.preventDefault();

  // Simple validation (HTML required handles most)
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name && email) {
    user.name = name;
    user.email = email;
    currentQuestionIndex = 0;
    score = 0;
    showScreen(quizScreen);
    loadQuestion();
  }
});

// Load a question on quiz screen
function loadQuestion() {
  resetState();
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('answer-btn');
    button.addEventListener('click', () => selectAnswer(button, answer.correct));
    answersEl.appendChild(button);
  });
}

// Reset UI state for new question
function resetState() {
  nextBtn.style.display = 'none';
  scoreSection.style.display = 'none';
  while (answersEl.firstChild) {
    answersEl.removeChild(answersEl.firstChild);
  }
  questionEl.style.display = 'block';
}

// Handle answer selection
function selectAnswer(selectedBtn, isCorrect) {
  Array.from(answersEl.children).forEach(button => {
    button.disabled = true;
    if (button === selectedBtn) {
      button.classList.add(isCorrect ? 'correct' : 'wrong');
    }
  });

  if (isCorrect) {
    score++;
  }
  nextBtn.style.display = 'inline-block';
}

// Next question or show score
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

// Show final score with a message including user name
function showScore() {
  resetState();
  questionEl.style.display = 'none';
  nextBtn.style.display = 'none';
  scoreSection.style.display = 'block';
  scoreSection.innerHTML = `
    <p>Well done, <strong>${user.name}</strong>! 🎉</p>
    <p>You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>.</p>
    <button id="restart-btn" class="primary-btn">Restart Quiz</button>
  `;

  // Restart quiz button listener
  const restartBtn = document.getElementById('restart-btn');
  restartBtn.addEventListener('click', () => {
    showScreen(homeScreen);
  });
}
