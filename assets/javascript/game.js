$(document).ready(function() {

  $(".content").hide();
  $(".container").on("click", function() {
    $(this).hide();
    $(".content").show();
});

var number = [35, 50, 44, 28, 20, 92];
var userScore = 0;
var counter = 0;
var wins = 0;
var lose = 0
var numberOptions = [1, 2, 3, 7, 4, 6, 5, 2, 8, 9];
var numberValue = [];
var playingNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var loading = $("<img>");
loading.attr("src", "http://www.google.de/images/swxa.gif");

function newNumber () {

    for (var i = 0; i < numberOptions.length; i++) {
      numberValue[i] = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    }

    $("#crystal1").attr("value", numberValue[0]);
    crystal1 = ($("#crystal1").attr("value"));
    crystal1 = parseInt(crystal1);
    console.log(crystal1);

    $("#crystal2").attr("value", numberValue[1]);
    crystal2 = ($("#crystal2").attr("value"));
    crystal2 = parseInt(crystal2);
    console.log(crystal2);

    $("#crystal3").attr("value", numberValue[2]);
    crystal3 = ($("#crystal3").attr("value"));
    crystal3 = parseInt(crystal3);
    console.log(crystal3);

    $("#crystal4").attr("value", numberValue[3]);
    crystal4 = ($("#crystal4").attr("value"));
    crystal4 = parseInt(crystal4);
    console.log(crystal4);

    playingNumber = number[Math.floor(Math.random() * number.length)];
    $("#targetNumber").text(playingNumber); 

    counter = 0;
    $("#score").text(counter);

}


newNumber();

$("#crystal1").html("hi"); 
            
$("#crystal1").on("click", function() {
  $("#crystal1").html(loading); 
  $("#result").text("");
  counter += crystal1;
  $("#score").text(counter);
  console.log(counter);

  if (counter === playingNumber) {
      wins++;
      $("#wins").text("Wins: " + wins);
      $("#result").text("You Win!");
      newNumber();
      console.log(numberValue); 
      console.log(playingNumber);
    }

  else if (counter >= playingNumber) {

      $("#result").text("You Lose!");
      lose++;
      $("#losses").text("Losses: " + lose);
      newNumber();
      console.log(numberValue); 
      console.log(playingNumber);  
    }
  });

$("#crystal2").on("click", function() { 
     $("#result").text("");
     counter += crystal2;
     console.log(counter);
     $("#score").text(counter);

  if (counter === playingNumber) {

      wins++;
      $("#wins").text("Wins: " + wins);
      $("#result").text("You Win!");
      newNumber();
      console.log(numberValue); 
      console.log(playingNumber);
    }

  else if (counter >= playingNumber) {
    
      $("#result").text("You Lose!");
      lose++;
      $("#losses").text("Losses: " + lose);
      newNumber();
      console.log(numberValue); 
      console.log(playingNumber);
  }
  }); 

$("#crystal3").on("click", function() { 
  $("#result").text("");
  counter += crystal3;
  console.log(counter);
  $("#score").text(counter);
  
  if (counter === playingNumber) {
wins++;
      $("#wins").text("Wins: " + wins);
      $("#result").text("You Win!");
      newNumber();
      console.log(numberValue); 
      console.log(playingNumber);
    }
 
 else if (counter >= playingNumber) {
$("#result").text("You Lose!");
      lose++;
      $("#losses").text("Losses: " + lose);
      newNumber();
      console.log(numberValue); 
      console.log(playingNumber);
  }
  }); 

$("#crystal4").on("click", function() { 
  $("#result").text("");
  counter += crystal4;
  console.log(counter);
  $("#score").text(counter);

  if (counter === playingNumber) {
      wins++;
      $("#wins").text("Wins: " + wins);
      $("#result").text("You Win!");
      newNumber();
      console.log(numberValue); 
      console.log(playingNumber);
    }
 else if (counter >= playingNumber) {

      $("#result").text("You Lose!");
      lose++;
      $("#losses").text("Losses: " + lose);
      newNumber();
      console.log(numberValue); 
      console.log(playingNumber);
  }
  }); 
  
});