
//lab 06/07

function userCity(){
    var cityName = prompt("Welcome to Blue Sky Real Estate, What City Are Looking For Your Dream Home?");

document.write("You Might Like These Houses in" + " " + cityName)
}

// alert('You Have Qualified For A Local Purchase Discount!');

/*var txt;
var r = confirm("Ready to continue?");
if (r == true) {
    text = "Yes"
} else {
    text = "No"
}*/

// Lab 08

var correctAnswer = 34;

function guessingGame(){
    var userAnswer = prompt('You have three tries to select a number 1 - 50');
    while(userAnswer < 1 || userAnswer > 100){
        userAnswer = prompt('Incorrect Please select again, 1 - 50');
    }
    var numberOfGuesses = 2
    for(var i = 0; i < numberOfGuesses; i++){
        if (userAnswer == correctAnswer){
            alert('Great job, you got it right');
            break;
        } else if(userAnswer < correctAnswer){
            userAnswer = prompt('Please select a number 1 - 50');
        } else if (userAnswer > correctAnswer){
                    userAnswer = prompt('Please select a number 1 - 50');
                } 
            }
        }
guessingGame();

var rating = prompt('Give us a rating 1 - 5 stars');

function printNumbers(numberOfStars){
    for (var i = 0; i < numberOfStars; i++){
        document.write('<img class=photoX style="height:20px;","margin:20px;" id=photoX src=https://upload.wikimedia.org/wikipedia/commons/f/f3/Star_Emoji.png>')
    }
}
printNumbers(rating);

