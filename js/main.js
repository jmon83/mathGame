let theCount = 0;
let yourScore = 0;
let helloDialog = document.getElementById('helloDialog');
let theProblem = document.getElementById('theNumbers');
let tickUp;
let progBarMeter = document.getElementById('progBarMeter');

function aTick(){
  let interval = setInterval(function () {
    theCount++;
    console.log(theCount);
    updateTheMeter(theCount);
    if (theCount == 15) {
      clearInterval(interval);
      endGame();
    }
  }, 1100);
}

let updateTheMeter = function (theCount) {
  progBarMeter.style.width = `"${theCount}0%"`;
}

function playGame(){
  countDown();
  gameStart();
}

let gameStart = function(){
  aTick();
}


//Get or Set High Score
let highScore = function(){
  };

//Timer


//Countdown
let countDown = function() {
$('#c3').fadeIn(500, function(){
  $('#c3').fadeOut(500, function(){
    $('#c2').fadeIn(500, function(){
      $('#c2').fadeOut(500, function(){
        $('#c1').fadeIn(500, function(){
          $('#c1').fadeOut(500, function(){
            $('#pl').fadeIn(500, function(){
             $('#pl').fadeOut(500)
            })
          });
        })
      })
    })
  })
});
};

let getNumbers = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min + 1) + min);
}
//Make the math problems
let makeProblem = function () {
  let num1 = getNumbers(1, 10);
  let num2 = getNumbers(1, 10);
  let numOp = getNumbers(1, 4);
  let theQuestion = {};
  switch(numOp) {
    case 1:
      theQuestion.answer = num1 + num2;
      theQuestion.question = num1 + " + " + num2;
      break;
    case 2:
      theQuestion.answer = num1 - num2;
      theQuestion.question = num1 + " - " + num2;
      break;
    case 3:
      theQuestion.answer = num1 * num2;
      theQuestion.question = num1 + " x " + num2;
      break;
    case 4:
      let theQuestionDiv = num1 / num2;
      theQuestion.answer = Math.floor(theQuestionDiv);
      theQuestion.question = num1 + " ÷ " + num2;
      break;
  }
  return theQuestion;
}

//take the answer

//increment or decrement timer


$(document).ready(function (){
  $('#helloDialog').modal('toggle');
});
