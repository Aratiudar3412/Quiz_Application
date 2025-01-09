const quizData = [
    {
      question: "1.What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "2.What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "3.What is the chemical symbol of water",
      options: ["H2O", "OH", "H2", "OH2"],
      answer: "H2O",
    },
    {
      question: "4. What is the pH value of the human body?",
      options: ["9.2 to 9.8", "7.0 to 7.8", "6.1 to 6.3", "6.1 to 6.3"],
      answer: "7.0 to 7.8",
    },
    {
      question: "5.What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },

    {
        question: "6.How many days are there in a week?",
        options: ["4","7","5","11"],
        answer: "7",
      },
      {
        question: "7.How many letters are there in the english alphabet?",
        options: ["15", "22", "35", "26"],
        answer: "26",
      },
      {
        question: "8.Name the national bird of india?",
        options: ["peacock", "parrot", "penguins", "sparrow"],
        answer: "peacock",
      },
      {
        question: "9.Which river is the longest in the world?",
        options: ["Amazon","Mississippi", "Nile","Yangtze"],
        answer: "Nile",
      },
      {
        question: "10.Which state is known as the land of five rivers?",
        options: ["Earth", "panjab", "tamil nadu", "maharastra"],
        answer: "panjab",
      },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("answer-btn");
      button.addEventListener("click", () => selectAnswer(button, currentQuestion.answer));
      answersEl.appendChild(button);
    });
  }
  
  function resetState() {
    nextBtn.disabled = true;
    while (answersEl.firstChild) {
      answersEl.removeChild(answersEl.firstChild);
    }
  }
  
  function selectAnswer(button, correctAnswer) {
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((btn) => (btn.disabled = true));
  
    if (button.textContent === correctAnswer) {
      button.style.backgroundColor = "green";
      score++;
    } else {
      button.style.backgroundColor = "red";
      buttons.forEach((btn) => {
        if (btn.textContent === correctAnswer) btn.style.backgroundColor = "green";
      });
    }
    nextBtn.disabled = false;
  }
  
  function showScore() {
    questionEl.style.display = "none";
    answersEl.style.display = "none";
    nextBtn.style.display = "none";
    scoreEl.style.display = "block";
    restartBtn.style.display = "block";
  
    scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionEl.style.display = "block";
    answersEl.style.display = "block";
    nextBtn.style.display = "block";
    restartBtn.style.display = "none";
    scoreEl.style.display = "none";
    loadQuestion();
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
  
  restartBtn.addEventListener("click", restartQuiz);
  
  // Initialize the quiz
  loadQuestion();
  