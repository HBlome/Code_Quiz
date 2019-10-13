function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

    if (question1 == "HTML") {
        correct++;
    }
    if (question2 == "Cascading Style Sheets") {
        correct++;
    }
    if (question3 == "some thing") {
        correct++;
    }

var messages = ["Fantastic!", "You're getting there", "Really? Is that the best you can do?"]
var pictures = ["great.html", "okay.html", "kiddingme.html"]
var range;
    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2) {
        range = 0;
    }


document.getElementByClassName("after_submit").style.visibility = "visible";

document.getElementByClassName("message").innerHTML = messages[range];
document.getElementByClassName("correct_number").innerHTML = "You got " + correct + " correct.";
document.getElementByClassName("picture").src = pictures[range];
}
