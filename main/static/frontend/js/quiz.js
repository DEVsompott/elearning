var questions = [
  {
    question: "1",
    choices: ["ก", "ข", "ค", "ง"],
    correctAnswer: "ค",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 1",
  },
  {
    question: "2",
    choices: ["ก", "ข", "ค", "ง"],
    correctAnswer: "ค",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 2",
  },
  {
    question: "3",
    choices: ["ก", "ข", "ค", "ง"],
    correctAnswer: "ค",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 3",
  },
  {
    question: "4",
    choices: ["ก", "ข", "ค", "ง"],
    correctAnswer: "ค",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 4",
  },
  {
    question: "5",
    choices: ["ก", "ข", "ค", "ง"],
    correctAnswer: "ค",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 5",
  },
  {
    question: "6",
    choices: ["ก", "ข", "ค", "ง"],
    correctAnswer: "ค",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 6",
  },
  {
    question: "7",
    choices: ["ก", "ข", "ค", "ง"],
    correctAnswer: "ค",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 3",
  },
  {
    question: "8",
    choices: ["ก", "ข", "ค", "ง"],
    correctAnswer: "ค",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 3",
  },
  {
    question: "9",
    choices: ["ก", "ข", "ค", "ง"],
    correctAnswer: "ค",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 3",
  },
  {
    question: "10",
    choices: ["ก", "ข", "ค", "ง"],
    correctAnswer: "ค",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 3",
  },
];

function displayQuestions() {
  for (var i = 0; i < questions.length; i++) {
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("row", "mb-5");

    var questionCol = document.createElement("div");
    questionCol.classList.add("col-12", "mt-4");
    questionDiv.appendChild(questionCol);

    var questionText = document.createElement("p");
    questionText.innerHTML = "ข้อที่ " + (i + 1) + ": " + questions[i].question;
    questionCol.appendChild(questionText);

    var choicesCol = document.createElement("div");
    choicesCol.classList.add("col", "ms-3");
    questionCol.appendChild(choicesCol);

    var choices = questions[i].choices;
    for (var j = 0; j < choices.length; j++) {
      var choiceDiv = document.createElement("div");
      choiceDiv.classList.add("form-check");
      choicesCol.appendChild(choiceDiv);

      var choiceInput = document.createElement("input");
      choiceInput.classList.add("form-check-input");
      choiceInput.type = "radio";
      choiceInput.name = "question" + (i + 1);
      choiceInput.value = choices[j];
      choiceInput.id = "flexRadioDefault" + (i + 1) + (j + 1);
      choiceDiv.appendChild(choiceInput);
      var choiceLabel = document.createElement("label");
      choiceLabel.classList.add("form-check-label");
      choiceLabel.innerHTML = choices[j];
      choiceLabel.setAttribute("for", "flexRadioDefault" + (i + 1) + (j + 1));
      choiceDiv.appendChild(choiceLabel);
    }

    document.getElementById("quizForm").appendChild(questionDiv);
  }
}

function checkAnswers() {
  window.scrollTo(0, 0);

  

  var correctAnswers = 0;
  for (var i = 0; i < questions.length; i++) {
    var radios = document.getElementsByName("question" + (i + 1));
    var questionCol = document.getElementsByClassName("col-12")[i];
    var isCorrect = false;
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].value == questions[i].correctAnswer && radios[j].checked) {
        correctAnswers++;
        isCorrect = true;
        break;
      }
    }
    if (isCorrect) {
      questionCol.style.color = "green";
    } else {
      questionCol.style.color = "red";
      var message = document.createElement("p");
      message.innerHTML = questions[i].message;
      message.style.color = "red";
      questionCol.appendChild(message);
    }
  }
  //แสดงคำตอบ
  document.getElementById("result").innerHTML =
    "คุณได้คะแนน " + correctAnswers + " / " + questions.length;
  if(correctAnswers<6){
    document.getElementById("pass").innerHTML = "คุณยังไม่ผ่านการทดสอบกรุณาทบทวนและสอบใหม่อีกครั้ง";
    document.getElementById("pass").style.color = "red";
  }else{
    document.getElementById("pass").innerHTML = "คุณผ่านการทดสอบแล้ว";
    document.getElementById("pass").style.color = "green";
  }
  //ทำให้ปุ่มsubmitหายเมื่อกดส่งคำตอบ
  document.getElementById("submitBtn").style.display = "none";
  //เพิ่มปุ่มกลับไปยังหนาหลัก
  var backButton = document.createElement("input");
  backButton.setAttribute("type", "button");
  backButton.setAttribute("value", "กลับไปหน้าหลัก");
  backButton.setAttribute("class", "btn btn-primary center1");
  backButton.setAttribute("onclick", "location.href='User-page.html'");
  document.getElementById("quizForm").appendChild(backButton);
  //เมื่อกดส่งคำตอบจะไม่สามารถทำข้อสอบต่อได้
  var inputs = document.getElementsByClassName("form-check-input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
}

displayQuestions();
