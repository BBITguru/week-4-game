// Display crystalImage as element attribute 
crystalImage = ["assets/images/blue.png","assets/images/red.png","assets/images/yellow.png","assets/images/green.png"];

// wins and losses
var wins = 0;
var losses = 0;
var computerChoice; //Random number generated user tries to reach
// var crystalValues;
var valueArray=[]; //array of numbers to assign to #crystalImages
var userScore = 0; //add crystalValue to this when user clicks   
var userOfNum = document.getElementById("#score")

initializeGame();

function initializeGame(){
// Computer's chooses a number
  computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  console.log(computerChoice);
// assign computerChoice to element "#ranNum" and "#ofNum"
    $("#ranNum").text(computerChoice);
    $("#ofNum").text(computerChoice);
// Display wins or losses
    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);
    userScore = 0;
    $("#score").text(userScore);
    crystalValues();
}

// Generate array of values for crystals
function crystalValues () {
  valueArray = [];
  for(i=0;i<4;++i){
    valueArray.push (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
  }
  console.log(valueArray);

// set array values to html elements as attributes using .attr()
  $("#c0").attr("value" , valueArray[0]);
  $("#c1").attr("value" , valueArray[1]);
  $("#c2").attr("value" , valueArray[2]);
  $("#c3").attr("value" , valueArray[3]);
}

function newScore(){
  console.log('new score hit');
  if(userScore === computerChoice){
    wins++;
    initializeGame();
  }
    else if( userScore > computerChoice){
      losses++;
      initializeGame();
    }
    else{
      $("#score").text(userScore)
    }
  };

// Add userScore from crystalSelection
$("#c0").on("click" , function(){
    userScore += valueArray[0]; 
    console.log("c0 userScore", userScore);
    newScore();
});
$("#c1").on("click" , function(){
  userScore += valueArray[1]; 
  console.log("c1 userScore", userScore);
  newScore();
});
$("#c2").on("click" , function(){
  userScore += valueArray[2]; 
  console.log("c2 userScore", userScore);
  newScore();
});
$("#c3").on("click" , function(){
  userScore += valueArray[3]; 
  console.log("c3 userScore", userScore);
  newScore();
});

// count wins or losses by adding userScore
// wins++ if exactly computerChoice else losses++ if greater than computerChoice








