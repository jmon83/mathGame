let theCount = 0;
let yourScore = 0;
let helloDialog = document.getElementById('helloDialog');
let theSpan = document.getElementById('highScore');
let fs = require('fs');

let playGame = function(){
  countDown();
}

let gameStart = function(){

}

//Get or Set High Score
let highScore = function(){
  var json = JSON.parse(fs.readFileSync('score.JSON', 'utf8'));
    console.log(json);
  };

//Countdown
let countDown = function() {
$('#c3').fadeIn(1000, function(){
  $('#c3').fadeOut(1000, function(){
    $('#c2').fadeIn(1000, function(){
      $('#c2').fadeOut(1000, function(){
        $('#c1').fadeIn(1000, function(){
          $('#c1').fadeOut(1000, function(){
            $('#pl').fadeIn(1000, function(){
             $('#pl').fadeOut(1000)
            })
          });
        })
      })
    })
  })
});
gameStart();
};


//Make the math problems

//take the answer

//increment or decrement timer


$(document).ready(function (){
  $('#helloDialog').modal('toggle')
  highScore()
})
