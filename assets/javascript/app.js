$(document).ready(function() {
var currentQuestion = 0;
var userPick;
var correct = 0;
var wrong = 0;
var unanswer= 0;
var trivia = [
	"Which one of these champions uses poison?",
	"Which one of these champion is consider a support?",
	"Which one of these champions says this line in the game Yep that tasted purple?",
	"Which one of these items in game makes you invulnerable for a certain amount of time? Hint: It makes you look like a golden statue.",
	"Which one of these champions excluding items can not get or give a second chance when you die, whether it is a passive or is a champions ability?",
	"Which one of these champions has an ability call Jack in the Box?",
	"Which one of these is not a position or role in the game?",
	"Which one of these is a champion that you can pick to play in the game?",
	"Which summoner spell is top priority for a jungler to have in game?",
	"You win the game when you?"
];
var choices = [
	["A. Leona", "B. Ashe", "C. Katarian","D. Cassiopeia"],
	["A. Teemo","B. Sona","C. Ezreal","D. Draven"],
	["A. Lulu", "B. Anivia", "C. Camille", "D. Vi"],
	["A. Long Sword", "B. Last Whisper", "C. Zhonyas Hourglass", "D. Hexdrinker"],
	["A. Aatrox", "B. Sejuani", "C. Zac", "D. Zilean"],
	["A. Syndra", "B. Kog'maw", "C. Singed", "D. Shaco"],
	["A. Point Guard", "B. Mid", "C. Jungle", "D. ADC" ],
	["A. Bloodseeker", "B. Riven", "C. Pugn", "D. Tidehunter"],
	["A. Smite", "B. Cleanse", "C. Clarity", "D. Heal"],
	["A. Have 100 kills", "B. Stole the blue buff", "C. Team gets first blood", "D. Destroy the enemy Nexus"]
];
var answer = [
	"D. Cassiopeia", "B. Sona", "A. Lulu", "C. Zhonyas Hourglass", "B. Sejuani", "D. Shaco", "A. Point Guard", "B. Riven", "A. Smite", "D. Destroy the enemy Nexus"
];


//first page
function firstPage(){
//hides everthing that is not needed at the time
	$("#question").hide();
	$("#choices").hide();
	$("#show-number").hide();
	$("#wrong").hide();
	$("#right").hide();
	$("#noAnswer").hide();
	$("#restart").hide();
//show trivia
	$("#trivia").html("Let's start the Trivia");
}
//calling on the function firstPage
firstPage();

//restarting variables
function resetting(){
//go back to first question
currentQuestion = 0;
//zero out the score
correct = 0;
wrong = 0;
unanswer = 0;
}

//The start button
$("#start").on('click',function(){	
//display the first question
Question();
//check if button works
console.log("Start");
});

//restart button
$("#restart").on('click',function(){
//hide the score board after restarting the round
	$("#finish").hide();
	$("#unAnswer").hide();
	$("#lost").hide();
	$("#win").hide();
resetting();
//display the first question
Question();
//check if button works
console.log("PLAY AGAIN");
});

//dispay question
function Question(){
//hide the images until they are needed
	$("#start").hide();
	$("#wrong").hide();
	$("#right").hide();
	$("#noAnswer").hide();
	$("#trivia").hide();
	$("#front").hide();
	$("#restart").hide();
//condition to see are there any questions left
	if(trivia.length > currentQuestion){
//Start the timer
		run();
//timer appears on html
		$("#show-number").show();
//div containg multiple choice uncover
		$("#choices").show();
//div contain the current question uncover
		$("#question").show();
//writing the current question in the question id in html
		$("#question").html("<h2>" + trivia[currentQuestion] + "</h2>");
//fill in the multiple choice buttons with current question choices
		$("#choice0").html(choices[currentQuestion][0]);
		$("#choice1").html(choices[currentQuestion][1]);
		$("#choice2").html(choices[currentQuestion][2]);
		$("#choice3").html(choices[currentQuestion][3]);
		}
//if there is no more question go to scoreboard	
	else{
		clearInterval(counter);
//hide all text and things from view that are not needed
		$("#question").hide();
		$("#choices").hide();
		$("#show-number").hide();
		$("#wrong").hide();
		$("#right").hide();
		$("#noAnswer").hide();
//the score board to show at the end when going through the game more than once
		$("#finish").show();
		$("#win").show();
		$("#lost").show();
		$("#unAnswer").show();
//add text to the id finish
		$("#finish").html("Your final Score");
//show the amount of correct questions you got
		$("#win").html("Correct: " + correct);
//shows the amount of wrong questions you got 		
		$("#lost").html("Wrong: " + wrong);
//shows the amount of unanswered questions		
		$("#unAnswer").html("Unanswered questions: " + unanswer);	
//restart button is show 
		$("#restart").show();	
	
	}
//is it working	
console.log("Game is working");	
}

//when player picks an answer
$(".bt").on("click",function() {
//defining userPick as the button the player choosen
    userPick = $(this).text();
//multiple choice button hidden
    $("#choices").hide();
//timer hidden
	$("#show-number").hide()
//If what player pick is correct
if(userPick === answer[currentQuestion]){
//add one point to correct
		correct++;
//correct answer imgage shows
		$("#right").show();
//write the word correct in html
		$("#question").html("<h3>" + "Correct" +"</h3>");
//under the question id attach confirming corect answer to appear in html
		$("#question").append("<p>" +"The correct answer is " +answer[currentQuestion] + "</p>");
		clearInterval(counter);
//if user pick wrong answer
	}else {
// add one point to wrong
		wrong++;
// image of wrong answer appear
		$("#wrong").show();
//write the word wrong to show on html
		$("#question").html("<h3>" + "Wrong" + "</h3>")
//under the question id attach what was the correct answer 
		$("#question").append("<p>" +"The correct answer was " +answer[currentQuestion] + "</p>")
		 clearInterval(counter);
	}
//next question
		currentQuestion++;
//go to next question after 5 seconds
		setTimeout(function(){
   		Question();
    	}, 5000);
//making sure it works	
console.log("You have " +correct + " correct answers.");
console.log("You have " + wrong + " wrong answers.");
});

// this function is for the count down timer for questions
function run() {
/*the time keeps dislaying one sec less than the number claim to be 
so to have 45 seconds to display it has to be 45 + 1 = 46 seconds.*/
	var number = 46;
//set an interval that runs the decrement once a second.
      counter = setInterval(decrement, 1000);
//  The decrement function.
    function decrement() {
//  Decrease number by one.
      number--;
//  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + "Time Remaining:  " + number + "</h2>");
//  Once timer hits zero...
      if (number === 0) {
//  ...run the stop function.
        stop();        
      }
    }
//Timer working
console.log("Tick Tock");
}

//  The stop function use when no answer be pick
    function stop() {	
//add one point to Unanswer
    unanswer++;
//hide multiple choice
    $("#choices").hide();
//hide timer
	$("#show-number").hide();
//picture for no answer show
	$("#noAnswer").show();
//text for when no answer is picked
	$("#question").show();
	$("#question").html("<h3>" + "Times Up"+ "</h3>")
	$("#question").append("<p>" +"The correct answer was " +answer[currentQuestion] + "</p>")
// clearInterval function. It will stop the setInterval function
    clearInterval(counter);
//debugging
console.log("You have " + unanswer + " questions.");	
//next question
	currentQuestion++;
//next question in 5 seconds
    setTimeout(function(){
        Question();
        }, 5000);  

    }
  


}); 