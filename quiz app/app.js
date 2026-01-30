var questions = [
    {
      question: "Q1: HTML Stands for?",
      option1: "Hyper Text Markup Language",
      option2: "Hyper Tech Markup Language",
      option3: "Hyper Touch Markup Language",
      corrAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Q2: CSS Stands for",
      option1: "Cascoding Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Cascating Style Sheets",
      corrAnswer: "Cascading Style Sheets",
    },
    {
      question: "Q3: JavaScript is a ",
      option1: "Programming Language",
      option2: "Scripting Language",
      option3: "Markup Language",
      corrAnswer: "Scripting Language",
    },
     {
      question: "Q4: JavaScript is case ",
      option1: "Sensitive",
      option2: "Insensitive",
      option3: "None of above",
      corrAnswer: "Sensitive",
    },
    {
      question: "Q5: Which tag is used to make element unique ",
      option1: "id",
      option2: "class  ",
      option3: "label",
      corrAnswer: "id",
    },
    {
      question: "Q6: Which of the following is not a valid HTML element?",
      option1: "<section>",
      option2: "<article>",
      option3: "<container>",
      corrAnswer: "<container>",
    },
    {
      question: "Q7: Which of the following is not a JavaScript data type?",
      option1: "Undefined",
      option2: "Number",
      option3: "Float",
      corrAnswer: "Float",
    },
    {
      question: "Q8: Which of the following is a JavaScript data type?",
      option1: "String",
      option2: "Integer",
      option3: "Both of above",
      corrAnswer: "Both of above",
    },
    {
      question: "Q9: Which of the following is not a JavaScript framework/library?",
      option1: "React",
      option2: "Angular",
      option3: "Django",
      corrAnswer: "Django",
    },
    {
      question: "Q10: What is the difference between <div> and <span> tags?",
      option1: "<div> is a block-level element, while <span> is an inline element",
      option2: "False",
      option3: "None of above",
      corrAnswer: "<div> is a block-level element, while <span> is an inline element",
    },
     {
      question: "Q11  : How do you create a hyperlink and add an image in HTML?",
      option1: "<a href='image.jpg'>Image</a>",
      option2: "<img src='image.jpg' alt='Image'>",
      option3: "<a href='image.jpg'><img src='image.jpg' alt='Image'></a>",
      corrAnswer: "<a href='image.jpg'><img src='image.jpg' alt='Image'></a>",
    },
    {
      question: "Q12: Which CSS property is used to change the text color of an element?",
      option1: "font-color",
      option2: "text-color",
      option3: "color",
      corrAnswer: "color",
    },
    {
      question: "Q13: How do you declare a JavaScript variable?",
      option1: "var myVariable;",
      option2: "variable myVariable;",
      option3: "v myVariable;",
      corrAnswer: "var myVariable;",
    },
    {
      question: "Q14: Which operator is used to assign a value to a variable in JavaScript?",
      option1: "=",
      option2: "==",
      option3: "===",
      corrAnswer: "=",
    },
    {
      question: "Q15: How do you write a comment in JavaScript?",
      option1: "// This is a comment",
      option2: "<!-- This is a comment -->",
      option3: "# This is a comment",
      corrAnswer: "// This is a comment",
    }
  ];
  var button = document.getElementById("btn");
  var question = document.getElementById("ques");
  var option1 = document.getElementById("opt1");
  var option2 = document.getElementById("opt2");
  var option3 = document.getElementById("opt3");
  var index = 0;
  var score = 0;
  var sec = 59;
  var min = 1;
  
var timerElement = document.getElementById("timer");
  
  function timer() {
    timerElement.innerText = `${min}:${sec}`;
    sec--;
    if (sec < 0) {
      min--;
      sec = 59;
  
      if (min < 0) {
        min = 1;
        sec = 59;
        nextQuestion();
      }
    }
  }
  
  setInterval(timer, 1000);
  
  function nextQuestion() {
    var options = document.getElementsByClassName("options");
  
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        var selectedOption = options[i].value;
        var getOption = questions[index - 1][`option${selectedOption}`];
        var corrAnswer = questions[index - 1]["corrAnswer"];
  
        if (getOption === corrAnswer) {
          score++;
        }
  
        console.log(getOption);
      }
  
      options[i].checked = false;
    }
    button.disabled = true;
  
    if (index > questions.length - 1) {
      Swal.fire({
        title: "Good job!",
        text: `Your score is ${((score / questions.length) * 100).toFixed(2)}`,
        icon: "success",
  });


    } else {
      question.innerText = questions[index].question;
      option1.innerText = questions[index].option1;
      option2.innerText = questions[index].option2;
      option3.innerText = questions[index].option3;
      index++;
    }
  }
  
  function clicked() {
    button.disabled = false;
  }