// Setting variables.
var goalNum;
var scoreNum;
var crystal1Num;
var crystal2Num;
var crystal3Num;
var crystal4Num;

// Function for randomly assigning values.
function gameStart() {
	// Randomly assign values for goal, crystal1, crystal2, crystal3, crystal4.
	goalNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		console.log(goalNum)
	crystal1Num = Math.floor(Math.random() * 12) + 1;
		console.log(crystal1Num)
	crystal2Num = Math.floor(Math.random() * 12) + 1;
		console.log(crystal2Num)
	crystal3Num = Math.floor(Math.random() * 12) + 1;
		console.log(crystal3Num)
	crystal4Num = Math.floor(Math.random() * 12) + 1;
		console.log(crystal4Num)

	// Print the goal number and initialze score to 0.
	$("#goal").html(goalNum);
	scoreNum = 0;
	$("#score").html(scoreNum);

};

// Start the game.
gameStart();
var wins = 0;
var losses = 0;

// Click functions for crystal images.
$("#crystal1").on("click", function() {
	scoreNum += crystal1Num;
	$("#score").html(scoreNum);
	// If statement to check if user won the game or lost and increment wins and losses.
	if (scoreNum === goalNum) {
		wins++;
		$("#wins").html("Wins: " + wins);
		gameStart();
	} else if (scoreNum > goalNum) {
		losses++;
		$("#losses").html("Losses: " + losses);
		gameStart();
	}
});

$("#crystal2").on("click", function() {
	scoreNum += crystal2Num;
	$("#score").html(scoreNum);
	// If statement to check if user won the game or lost and increment wins and losses.
	if (scoreNum === goalNum) {
		wins++;
		$("#wins").html("Wins: " + wins);
		gameStart();
	} else if (scoreNum > goalNum) {
		losses++;
		$("#losses").html("Losses: " + losses);
		gameStart();
	}
});

$("#crystal3").on("click", function() {
	scoreNum += crystal3Num;
	$("#score").html(scoreNum);
	// If statement to check if user won the game or lost and increment wins and losses.
	if (scoreNum === goalNum) {
		wins++;
		$("#wins").html("Wins: " + wins);
		gameStart();
	} else if (scoreNum > goalNum) {
		losses++;
		$("#losses").html("Losses: " + losses);
		gameStart();
	}
});

$("#crystal4").on("click", function() {
	scoreNum += crystal4Num;
	$("#score").html(scoreNum);
	// If statement to check if user won the game or lost and increment wins and losses.
	if (scoreNum === goalNum) {
		wins++;
		$("#wins").html("Wins: " + wins);
		gameStart();
	} else if (scoreNum > goalNum) {
		losses++;
		$("#losses").html("Losses: " + losses);
		gameStart();
	}
});