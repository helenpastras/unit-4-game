// There will be four crystals displayed as buttons on the page.
var $crystalButton1;
var $crystalButton2;
var $crystalButton3;
var $crystalButton4;
var $wantedScore;
var $yourScore;
var yourScore;
var wins;
var loses;

function setButtonValues() {
}

$(document).ready(function() {
    $crystalButton1 = $("#crystal1");
    $crystalButton2 = $("#crystal2");
    $crystalButton3 = $("#crystal3");
    $crystalButton4 = $("#crystal4");
    $wantedScore = $("#wantedScore");
    $yourScore = $("#yourScore");

// When the player clicks on a crystal, 
var randomNumber1 = Math.floor((Math.random() * 12) + 1);
var randomNumber2 = Math.floor((Math.random() * 12) + 1);
var randomNumber3 = Math.floor((Math.random() * 12) + 1);
var randomNumber4 = Math.floor((Math.random() * 12) + 1);

// it will add a specific amount of points to the player's total score. 
$crystalButton1.on("click", function() {
    yourScore = yourScore + randomNumber1;
    $yourScore.text(yourScore);
});

$crystalButton2.on("click", function() {
    yourScore = yourScore + randomNumber2;
    $yourScore.text(yourScore);
});

$crystalButton3.on("click", function() {
    yourScore = yourScore + randomNumber3;
    $yourScore.text(yourScore);
});

$crystalButton4.on("click", function() {
    yourScore = yourScore + randomNumber4;
    $yourScore.text(yourScore);
});

// Your game will hide this amount until the player clicks a crystal.

// The player wins if their total score matches the random number from the beginning of the game.

// When they do click one, update the player's score counter.
function onStart() {  
  $wantedScore = Math.floor((Math.random() * 120) + 19);
  $("#wantedScore").text($wantedScore);
  yourScore = 0;

}

onStart();

});
function game() {
    $("#wins").text("Wins: " + wins)
    $("#loses").text("Loses: ")

    $("")

    if ($yourScore == $wantedScore) {

        console.log("win");
        wins ++;
    
    }
    
    // The player loses if their score goes above the random number.
    else {
        console.log("lose");
        loses ++;
      }
}
game();


// document.getElementById("wins").innerHTML = "Wins: " + wins;
// document.getElementById("loses").innerHTML = "Loses: " + loses;

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, 
// the user's score (and score counter) will reset to zero
function reset(){
    $wantedScore = Math.floor((Math.random() * 120) + 19);
    $("#wantedScore").text($wantedScore);
    console.log(wantedScore);
}