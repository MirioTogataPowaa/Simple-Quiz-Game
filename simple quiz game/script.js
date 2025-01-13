
      var containerDiv = document.getElementById("problem-container");
      var scoreDiv = document.getElementById("score");
      var wrongAnswersDiv = document.getElementById("wrong-answers");
      var answerInput = document.getElementById("answer-input");
      var checkButton = document.getElementById("check-button");

      var score = 0;
      var wrongAnswers = 0;

      function generateProblem() {
        var n1 = Math.floor(Math.random() * 10) + 1;
        var n2 = Math.floor(Math.random() * 10) + 1;
        var nsum = n1 + n2;

        document.getElementById("num1").innerHTML = n1;
        document.getElementById("num2").innerHTML = n2;

        checkButton.addEventListener("click", function () {
          var userAnswer = parseInt(answerInput.value);
          if (userAnswer === nsum) {
            score++;
            scoreDiv.innerHTML = score;
            scoreDiv.style.color = "green";
            wrongAnswersDiv.innerHTML = wrongAnswers;
          } else {
            wrongAnswers++;
            scoreDiv.innerHTML = score;
            wrongAnswersDiv.innerHTML = wrongAnswers;
            wrongAnswersDiv.style.color = "red";
          }
          generateProblem();
        });
      }

      generateProblem();
