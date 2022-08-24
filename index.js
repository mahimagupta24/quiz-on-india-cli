var readlineSync = require("readline-sync")
var userName = readlineSync.question("what is your name?")
var score = 0
console.log("welcome " + userName + " to Quiz on India")
//play function
function play(question, answer) {
  var userAnswer= readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right!")
    score = score + 1
  } else {
    console.log("Wrong!")
  }
  console.log("current score :", score)
  console.log("   ")
}

var questions = [{
  question: "What is the capital of India?",
  
  answer: "new delhi"
}, {
  question: "Which city is called the pink city?",
  
  answer: "jaipur"
}, {
  question: "Who was the first lady chief justice of India?",
  
  answer: "justice fatima beevi"
}, {
  question: "Name the largest fresh water lake in India? ",
  
  answer: "wular"
}, {
  question: "Who is known as iron man of India?",
  
  answer: "sardar vallabh bhai patel"
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("YAY!YOU SCORED ", score)
