var questions = [
  {
    question: "เมื่อเลือก ยื่นแทน(กรณีไม่สามารถยื่นคำร้องได้ด้วยตนเอง) ในข้อที่ 1 ข้อมูลจะเป็นของใคร",
    choices: ["ก.ผู้ประสบปัญหาทางสังคม", "ข.ผู้ยื่นแทนที่เป็นผู้ดูแล", "ค.ผู้ยื่นคำร้อง", "ง.ผู้ใหญ่บ้าน"],
    correctAnswer: "ข.ผู้ยื่นแทนที่เป็นผู้ดูแล",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 1",
  },
  {
    question: "เมื่อท่านอพม.เลือก ยื่นแทนในข้อที่ 1 แล้วหัวข้อถัดไปในข้อที่ 2 ประวัติผู้ประสบปัญหาทางสังคม ระบบจะให้กรอกข้อมูลของใคร ",
    choices: ["ก.ผู้ประสบปัญหาทางสังคม", "ข.ผู้ยื่นแทนที่เป็นผู้ดูแล", "ค.ผู้ยื่นคำร้อง", "ง.ผู้ใหญ่บ้าน"],
    correctAnswer: "ก.ผู้ประสบปัญหาทางสังคม",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 2",
  },
  {
    question: "ที่อยู่ตามทะเบียนบ้าน เป็นที่อยู่ของใคร",
    choices: ["ก.ผู้ประสบปัญหาทางสังคม", "ข.ผู้ยื่นแทนที่เป็นผู้ดูแล", "ค.ผู้ยื่นคำร้อง", "ง.ผู้ใหญ่บ้าน"],
    correctAnswer: "ก.ผู้ประสบปัญหาทางสังคม",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 3",
  },
  {
    question: "ที่มาของรายได้ ของผู้ประสบปัญหา ข้อใด “ไม่ใช่” รายได้ที่ผู้อื่นให้",
    choices: ["ก.เงินเดือนในการทำงานประจำ", "ข.พ่อแม่ส่งให้", "ค.สวัสดิการจากรัฐ", "ง.ลูกส่งให้"],
    correctAnswer: "ก.เงินเดือนในการทำงานประจำ",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 4",
  },
  {
    question: "ประเภทผู้ขอรับบริการ สามารถเลือกได้กี่ข้อ",
    choices: ["ก.1 ข้อ", "ข.กี่ข้อก็ได้", "ค.2 ข้อ", "ง.3 ข้อ"],
    correctAnswer: "ข.กี่ข้อก็ได้",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 5",
  },
  {
    question: "สภาพปัญหาความเดือดร้อน ควรเลือกหัวข้อที่กำหนดไว้ จากสภาพปัญหาทั้ง 9 ด้าน(ข้อ 6.1-6.9) อย่างน้อยกี่ข้อ",
    choices: ["ก.อย่างน้อย 1 ข้อ", "ข.อย่างน้อย 2 ข้อ", "ค.อย่างน้อย 3 ข้อ", "ง.อย่างน้อย 4 ข้อ"],
    correctAnswer: "ก.อย่างน้อย 1 ข้อ",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 6",
  },
  {
    question: "การขอรับความช่วยเหลือ ถ้าท่านไม่ทราบจำนวนเงินที่จะต้องกรอกลงไป ควรทำอย่างไร",
    choices: ["ก.ใส่เลข 0 ", "ข.เว้นว่างไว้ เพราะไม่มีเครื่องหมาย * บังคับให้กรอกจำนวนเงิน", "ค.ขีด -", "ง.ถูกทั้ง ข้อ a และ b"],
    correctAnswer: "ง.ถูกทั้ง ข้อ a และ b",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 3",
  },
  {
    question: "การรับรองข้อมูลส่วนบุคคล ต้องให้ใครลงลายมือชื่อ ในรูปแบบลายเซ็นอิเล็กทรอนิกส์",
    choices: ["ก.อพม.", "ข.ผู้ประสบปัญหาทางสังคม", "ค.ครอบครัวผู้ประสบปัญหา", "ง.เพื่อนบ้าน"],
    correctAnswer: "ข.ผู้ประสบปัญหาทางสังคม",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 3",
  },
  {
    question: "การถ่ายรูป ควรมีลักษณะอย่างไร",
    choices: ["ก.รูปถ่ายแนวตั้ง", "ข.รูปถ่ายแนวตะแคง", "ค.รูปถ่ายแนวนอน", "ง.รูปถ่ายแนวเฉียง"],
    correctAnswer: "ค.รูปถ่ายแนวนอน",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 3",
  },
  {
    question: "เมื่อบันทึกข้อมูลแล้ว จะพบกับสถานะ “บันทึกไม่สำเร็จ” หมายความว่าอะไร  ",
    choices: ["ก.ให้เจ้าของเคสหรือผู้บันทึก ตรวจสอบการบันทึกข้อมูลที่หน้าดูข้อมูลก่อนกดส่งให้ระดับต่อไป", "ข.ให้ทำแบบคำขอรับความช่วยเหลือผู้ประสบปัญหาทางสังคมอีกครั้ง", "ค.ไม่ต้องดำเนินการอะไร ระบบเปลี่ยนสถานะให้อัตโนมัต", "ง.ออกจากระบบ แล้วเข้าสู่ระบบใหม่อีกครั้ง"],
    correctAnswer: "ก.ให้เจ้าของเคสหรือผู้บันทึก ตรวจสอบการบันทึกข้อมูลที่หน้าดูข้อมูลก่อนกดส่งให้ระดับต่อไป",
    message: "กรุณากลับไปดูวิดีโอในส่วนที่ 3",
  },
];
//สร้างtagและรูปแบบในหน้าqize.html
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
  //เลื่อนไปบนสุดเมื่อเริ่มfunction
  window.scrollTo(0, 0);
  //ตัวแปรเก็บคะแนน
  var correctAnswers = 0;
  //เช็คคคำตอบ
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
  //เช็กว่าผ่านการทดสอบหรือไม่
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
