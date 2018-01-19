function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var correct = 0;

if (question1 == "It do how it do."){
   correct++;
}

if (question2 == "8"){
   correct++;
}

if (question3 == "4.28 wps"){
   correct++;
}

if (question4 == "It's not a question of where he grips it! It's a simple question of weight ratios! A five ounce bird could not carry a one pound coconut."){
   correct++;
}

if (question5 == "Three shall be the number thou shalt count, and the number of the counting shall be three. Four shalt thou not count, neither count thou two, excepting that thou then proceed to three. Five is right out!"){
   correct++;
}

var messages =["Congrats you may need this.", "This fits perfectly", "You're whelming", "Ok so like do you even know me?", "Yeah you should get used to this..."]
var pictures =["https://www.us.mensa.org/join/testscores/", "https://media.giphy.com/media/HUbDfxIYVt4WY/giphy.gif", "https://media.giphy.com/media/y65VoOlimZaus/giphy.gif", "https://media.giphy.com/media/3owzVQ23NzdKvVALUA/giphy.gif","https://www.everyjobforme.com/?asID=38338658&creative=60808399872&matchtype=e&network=g&mobile=&placement=&aceid=&pos=1t1&kw=mcdonalds%20application&vtcid=173152032&vtagid=13298414832&vttid=kwd-774007650&vtlpid=9030090&device=c&gclid=EAIaIQobChMI_erDlYTy1QIVgYd-Ch0zvA4qEAAYASAAEgJZtvD_BwE"]

if (correct == 5){range = 0
}
if (correct == 4){range = 1
}
if (correct == 3){range = 2
}
if (correct == 2){range = 3
}
if (correct <= 1){range = 4
}

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
document.getElementById("picture").src = pictures[range];
}
