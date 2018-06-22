// There will be four crystals displayed as buttons on the page.
var $crystalButton1;
var $crystalButton2;
var $crystalButton3;
var $crystalButton4;
var $wantedScore;
var $yourScore;
var yourScore;
var wins = 0;
var losses = 0;




function updateState() {
  if (yourScore === $wantedScore) {
    alert("You win!");
    console.log("Yay! A win!");
    wins ++;
    $("#wins").text("Wins:" + wins);
      start()


  }
// The player losses if their score goes above the random number.
  else if (yourScore >= $wantedScore){
    alert("You lose!!");
    console.log("Loser! Hehe!");
    losses++;
    $("#losses").text("Losses: " + losses);
      start()
  }
}

function setButtonValues() {
}
    $(document).ready(function() {
            $crystalButton1 = $("#crystal1");
            $crystalButton2 = $("#crystal2");
            $crystalButton3 = $("#crystal3");
            $crystalButton4 = $("#crystal4");
            $wantedScore = $("#wantedScore");
            $yourScore = $("#yourScore");

    // The player will be shown a random number at the start of the game.
    var targetNumber = Math.floor((Math.random() * 120) + 1);

    $("#number-to-guess").text(targetNumber);
    
    // When the player clicks on a crystal, 
    var randomNumber1 = Math.floor((Math.random() * 12) + 1);
    var randomNumber2 = Math.floor((Math.random() * 12) + 1);
    var randomNumber3 = Math.floor((Math.random() * 12) + 1);
    var randomNumber4 = Math.floor((Math.random() * 12) + 1);

    // it will add a specific amount of points to the player's total score. Your game will hide this amount until the player clicks a crystal.
    $crystalButton1.on("click", function() {
        yourScore = yourScore + randomNumber1;
        $yourScore.text(yourScore);
    updateState()
    });

    $crystalButton2.on("click", function() {
        yourScore = yourScore + randomNumber2;
        $yourScore.text(yourScore);
    updateState()
    });

    $crystalButton3.on("click", function() {
        yourScore = yourScore + randomNumber3;
        $yourScore.text(yourScore);
    updateState()
    });

    $crystalButton4.on("click", function() {
        yourScore = yourScore + randomNumber4;
        $yourScore.text(yourScore);
    updateState()
    });

    onStart();
})
// When they do click one, update the player's score counter.
function onStart() {  
  yourScore = 0;
  $wantedScore = Math.floor((Math.random() * 120) + 19);
  $("#wantedScore").text($wantedScore); 
}

// The game restarts whenever the player wins or losses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, 
// the user's score (and score counter) will reset to zero
function reset(){
    var targetNumber = Math.floor((Math.random() * 120) + 1);

    $("#number-to-guess").text(targetNumber);
    
    // Reset values of each crystal
    var randomNumber1 = Math.floor((Math.random() * 12) + 1);
    var randomNumber2 = Math.floor((Math.random() * 12) + 1);
    var randomNumber3 = Math.floor((Math.random() * 12) + 1);
    var randomNumber4 = Math.floor((Math.random() * 12) + 1);
}
reset();


