let theCount = 0;
let yourScore = 0;
let helloDialog = document.getElementById('helloDialog');
let theProblem = document.getElementById('theNumbers');
let aQuestion;
let highScoreHolder;
let highScore1 = document.getElementById('highScore');
let progBarMeter = document.getElementById('progBarMeter');
let thisScore = document.getElementById('thisScore');
let yourScoreDisp = document.getElementById('yourScore');

//Timer
function aTick(){
  let interval = setInterval(function () {
    theCount++;
    console.log(theCount);
    thisScore.textContent = ` ${yourScore}`;
    updateTheMeter();
    if (theCount === 15) {
      clearInterval(interval);
      endGame();
    }
  }, 1100);
}

let updateTheMeter = function () {
  document.querySelector('#progBarMeter');
  switch (theCount) {
    case 4:
      $("#progBarMeter").addClass("bg-success");
      progBarMeter.style.width = '10%';
      break;
    case 5:
      $("#progBarMeter").addClass("bg-success");
      progBarMeter.style.width = '15%';
      break;
    case 6:
      $("#progBarMeter").addClass("bg-success");
      progBarMeter.style.width = '20%';
      break;
    case 7:
      $("#progBarMeter").addClass("bg-success");
      progBarMeter.style.width = '30%';
      break;
    case 8:
      $("#progBarMeter").addClass("bg-warning");
      progBarMeter.style.width = '40%';
      break;
    case 9:
      $("#progBarMeter").addClass("bg-warning");
      progBarMeter.style.width = '50%';
      break;
    case 10:
      $("#progBarMeter").addClass("bg-warning");
      progBarMeter.style.width = '60%';
      break;
    case 11:
      $("#progBarMeter").addClass("bg-warning");
      progBarMeter.style.width = '70%';
      break;
    case 12:
      $("#progBarMeter").addClass("bg-danger");
      progBarMeter.style.width = '80%';
      break;
    case 13:
      $("#progBarMeter").addClass("bg-danger");
      progBarMeter.style.width = '90%';
      break;
    case 14:
      $("#progBarMeter").addClass("bg-danger");
      progBarMeter.style.width = '95%';
      break;
    case 15:
      $("#progBarMeter").addClass("bg-danger");
      progBarMeter.style.width = '100%';
      break;

  }
}

function playGame(){
  theCount = 0;
  yourScore = 0;
  $("#progBarMeter").addClass("bg-success");
  countDown();
  gameStart();
}

let gameStart = function(){
  displayProblem();
  aTick();
}

let endGame = function() {
  progBarMeter.style.width = '0%';
  yourScoreDisp.textContent = ` ${yourScore}`;
  $('#byeDialog').modal('toggle');
 /* if (yourScore > highScoreHolder){ NODEJS!
    setHighScore(yourScore);
    highScore1 = yourScore;
  }*/
};

/*Get or Set High Score - still learning Nodejs
let setHighScore = function(score){
  $.ajax({
    type: 'POST',
    url: '/getScore',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data: JSON.stringify({
      score: {
        id: score
      }
    }),
    success: function (response) {
     console.log("success!");
    },
    error: function (xhr, status, err) {
      console.log(xhr.responseText);
    }
  });
}*/

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

//Make the math problems
let getNumbers = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min + 1) + min);
}

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

let displayProblem = function(){
  $('#theNumbers').fadeOut(300);
  aQuestion = makeProblem();
  theProblem.textContent = aQuestion.question;
  $('#theNumbers').fadeIn(325);
}

//take the answer
let answerTheQuestion = function(input, answer){
  if (input === answer) {
    yourScore++;
    theCount--
    //Green when correct
    $("#theNumbers").addClass("flash");
    setTimeout( function(){
      $("#theNumbers").removeClass("flash");
    }, 300);
    $('#answerField').val('');
    displayProblem();
  } else {
    //Red when wrong
    $("#theNumbers").addClass("wrongFlash");
    setTimeout( function(){
      $("#theNumbers").removeClass("wrongFlash");
    }, 300);
    $('#answerField').val('');
    displayProblem();
  }
};

$(document).ready(function () {
  $('#helloDialog').modal('toggle');


  $(function() {
    $('#answerField').keypress(function (e) {
      if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
        $('button[type=submit] .default').click();
        e.preventDefault();
        answerTheQuestion(Number($(this).val()), aQuestion.answer);
        return false;
      } else {
        return true;
      }
    });
  });


//Still learning Nodejs
  $.ajax({
    type: 'GET',
    url: '../score.JSON',
    withCredentials: true,
    success: function (response) {
      let myHiScore = JSON.parse(response);
      highScoreHolder = myHiScore.id;
      highScore1.textContent = myHiScore.id;
      console.log(myHiScore);
    },
    error: function (xhr, status, err) {
      console.log(xhr.responseText);
    }
  });
});
