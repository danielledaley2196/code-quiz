// Click start button
// Timer start
// First question shown
// User selects question from multiple choice 
// Tell if the answer was correct or not quickly
// Move onto next questions
// If answered incorrectly, time is subtracted
// All questions answered (5) or timer gets to zero, game over
// show score, and give option to save initials
// Highscore hyperlink in to corner, when click shows all previous games, even when refreshed (use local storage), have option to clear local storage

// array of questions longer than 5
// array with answers
$(document).ready(function() {
let quizQuestions = [{
    qText: "What is JavaScript?",
    answers: [
        "A font style.",
        "A delicious snack.",
        "It makes your website do things.",
        "It makes your website look pretty",
    ],
    //have some way to check if it has been used
    isused: false,
    correct: "It makes your website do things.",
},
 {
    qText: "What is console.log () used for?",
    answers: [
        "Puts information into the web console.",
        "Runs a function.",
        "Returns the data with an alert box.",
        "Refreshes the screen.",
    ],
    isused: false,
    correct: "Puts information into the web console.",
},
 {
    qText: "q3",
    answers: [
        "q1",
        "q2",
        "q3",
        "q4",
    ],
    isused: false,
    correct: "4q",
},
{
    qText: "q4",
    answers: [
        "q1",
        "q2",
        "q3",
        "q4",
    ],
    isused: false,
    correct: "2q",
},
{
    qText: "q5",
    answers: [
        "q1",
        "q2",
        "q3",
        "q4",
    ],
    isused: false,
    correct: "q3"
},
{
    qText: "q6",
    answers: [
        "q1",
        "q2",
        "q3",
        "q4",
    ],
    isused: false,
    correct: "q1",
},
{
    qText: "q7",
    answers: [
        "q1",
        "q2",
        "3q",
        "4q",
],
    isused: false,
    correct: "q3"
},
{
    qText: "q8",
    answers: [
        "1q",
        "q2",
        "q3",
        "q4",
    ],
    isused: false,
    correct: "q2",
},
{
    qText: "q9",
    answers: [
        "1q",
        "2q",
        "q3",
        "q4",
    ],
    isused: false,
    correct: "3q",
},
{
    qText: "q10",
    answers: [
        "q1",
        "q2",
        "q3",
        "q4",
    ],
    isused: false,
    correct: "q3",
},];


// function for random questiomn and answers
function showQuestion () {
    //console.log("hello");
    let question = [];
    for (i = 0; i < 10; i++) {
        let thisQuestion = quizQuestions[i].qText;
        //console.log(typeof quizQuestions);
       //console.log(quizQuestions[i].qText);
        question.push(thisQuestion);
        //console.log(thisQuestion);
        quizQuestions[i].answers.sort(function(){
            return(0.5-Math.random())
        });
        //console.log(question); 
        
        let askMe = question[Math.floor(Math.random() * question.length)];
        console.log(askMe);
        if (!quizQuestions[i].isused) {
            //tie to information header
             $(".information").replaceWith(".information".innerText).text(askMe);
            // use for each loop here for this and the one below
            isused = true;
            $(".showMe").replaceWith(".showMe".innerText) == $("<ul>").append("<li>").text(quizQuestions[i].answers);
        }
    }
    }
$("#startMe").on("click", showQuestion);

// can you make answers random among their own array?

// event listener for start

// event listener for question answered

//event listener for input

// function for randomquestion
});