$(document).ready(function() {
var currentQuestion = 0;
var userPick;
var correct = 0;
var wrong = 0;
var unanswer= 0;
var trivia = [
	"Which one of these champions uses poison?",
	"Which one of these champion is part of the support role?"
];
var choices = [
	["A. Leona", "B. Ashe", "C. Katarian","D. Cassiopeia"],
	["A. Teemo","B. Sona","C. Ezreal","D. Draven"]
];
var answer = [
	"D. Cassiopeia", "B. Sona"
];

//hides everthing that is not needed at the moment
//first page
function firstPage(){
	$("#question").hide();
	$("#choices").hide();
	$("#show-number").hide();
	$("#wrong").hide();
	$("#right").hide();
	$("#noAnswer").hide();
//show trivia
	$("#trivia").html("Let's start the Trivia");
}
//calling on the function firstPage
firstPage();

//The start button
$("#start").on('click',function(){
//display the first question
Question();
//check if button works
console.log("Start");
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
//keeping track of question

//if there is no more question go to scoreboard	
	else{
		clearInterval(counter);
//hide all text and things from view
		$("#question").hide();
		$("#choices").hide();
		$("#show-number").hide();
		$("#wrong").hide();
		$("#right").hide();
		$("#noAnswer").hide();
//add text to the id finish
		$("#finish").html("Your final Score");

		
	}	
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
if(userPick == answer[currentQuestion]){
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
		$("#question").append("<p>" +"The correct answer is " +answer[currentQuestion] + "</p>")
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
	clockRunning = true;
	var number = 45;

      counter = setInterval(decrement, 1000);
    
//  The decrement function.
    function decrement() {
//  Decrease number by one.
      number--;
//  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");
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
//next question
		currentQuestion++;
//hide multiple choice
    $("#choices").hide();
//hide timer
	$("#show-number").hide();
//picture for no answer show
	$("#noAnswer").show();
//text for when no answer is picked
	$("#question").show();
	$("#question").html("<h3>" + "Times Up"+ "</h3>")
	$("#question").append("<p>" +"The correct answer is " +answer[currentQuestion] + "</p>")
//  Clears our intervalId
//  to the clearInterval function.
    clearInterval(counter);
//debugging
console.log("You have " + unanswer + " questions.");	
//next question in 5 seconds
    setTimeout(function(){
        Question();
        }, 5000);  

    }











}); 