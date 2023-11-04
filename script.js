document.addEventListener("DOMContentLoaded", function() {
    var currentHour = new Date().getHours();
    var bodyElement = document.querySelector("body");
  
    if (currentHour >= 20 || currentHour < 6) {
      bodyElement.classList.add("dark-mode");
    }
  });

var questions = [
    {
      question: "¿Qué edad tengo actualmente?",
      options: ["32", "25", "23"],
      answer: 2
    },
    {
      question: "¿Cuál de estas no es la habilidad técnica que menciono?",
      options: ["Gestión de redes sociales", "Lenguajes de programación", "Herramientas de diseño"],
      answer: 0
    },
    {
      question: "¿Cuál es el idioma que todavía no manejo?",
      options: ["Francés", "Ruso", "Coreano"],
      answer: 1
    },
  ];
  
  var questionIndex = 0;
  var score = 0;
  
  function displayQuestion() {
    var currentQuestion = questions[questionIndex];
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
  
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var optionButton = document.createElement("button");
      optionButton.textContent = currentQuestion.options[i];
      optionButton.setAttribute("onclick", "checkAnswer(" + i + ")");
      optionsElement.appendChild(optionButton);
    }
  }
  
  function checkAnswer(answerIndex) {
    var currentQuestion = questions[questionIndex];
  
    if (answerIndex === currentQuestion.answer) {
      score++;
    }
  
    questionIndex++;
  
    if (questionIndex === questions.length) {
      endGame();
    } else {
      displayQuestion();
    }
  }
  
  function endGame() {
    var comment;
  
    if (score === questions.length) {
      comment = "¡Excelente trabajo! Parece que me conoces muy bien. Sigue explorando mi CV para descubrir más sobre mí y mi experiencia!";
    } else if (score >= questions.length / 2) {
      comment = "¡Bien hecho! Obtuviste una buena puntuación. Sigue explorando para conocer más sobre mí y lo que puedo aportar.";
    } else {
      comment = "¡No te preocupes! Aún hay mucho más que descubrir sobre mí. Te invito a revisar mi CV o contactarte conmigo :)";
    }
  
    var questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "<h4>¡Juego terminado!</h4><p>Puntuación: " + score + "/" + questions.length + "</p><p>" + comment + "</p>";
  }
  
  displayQuestion();