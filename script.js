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
        "It makes your website look pretty"
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
        "Refreshes the screen."
    ],
    isused: false,
    correct: "Puts information into the web console.",
},
 {
    qText: "q3",
    answers: [
        "a1",
        "a2",
        "a3",
        "a4"
    ],
    isused: false,
    correct: "a4",
},
{
    qText: "q4",
    answers: [
        "a1",
        "a2",
        "a3",
        "a4"
    ],
    isused: false,
    correct: "a2",
},
{
    qText: "q5",
    answers: [
        "a1",
        "a2",
        "a3",
        "a4"
    ],
    isused: false,
    correct: "a3"
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
        "a1",
        "a2",
        "a3",
        "a4"
],
    isused: false,
    correct: "a3"
},
{
    qText: "q8",
    answers: [
        "a1",
        "a2",
        "a3",
        "a4"
    ],
    isused: false,
    correct: "a2",
},
{
    qText: "a9",
    answers: [
        "a1",
        "a2",
        "a3",
        "a4"
    ],
    isused: false,
    correct: "a3",
},
{
    qText: "q10",
    answers: [
        "a1",
        "a2",
        "a3",
        "a4"
    ],
    isused: false,
    correct: "a3",
},];


// function for random questiomn and answers
function showQuestion () {
    //console.log("hello");
   // let question = [];
    for (let i = 0; i < 1; i++) {
        let thisQuestion = Math.floor(Math.random() * quizQuestions.length);

        //console.log(typeof quizQuestions);
       //console.log(quizQuestions[i].qText);
        //question.push(thisQuestion);
        //console.log(thisQuestion);
        //  quizQuestions[i].answers.sort(function(){
        //      return(0.5-Math.random())
        // });
        //console.log(question); 
        
        //let askMe = question[Math.floor(Math.random() * question.length)];
        //console.log(askMe);
        //console.log(`isused: ${quizQuestions[i].isused}`);
       // console.log(typeof quizQuestions[i].isused);
        if (quizQuestions[thisQuestion].isused === false) {
            //console.log(quizQuestions[thisQuestion].answers[1]);
            //tie to information header
             $(".information").text(quizQuestions[thisQuestion].qText);
            // use for each loop here for this and the one below
            thisQuestion.isused = true;
            
            // console.log(quizQuestions[thisQuestion].answers[0]);
            // console.log(quizQuestions[thisQuestion].answers[1]);
            // console.log(quizQuestions[thisQuestion].answers[2]);
            // console.log(quizQuestions[thisQuestion].answers[3]);
            // console.log($("#showMe"));
            for (let j = 0; j < 4; j++){
                let thisThing = $("<li>");
                thisThing.text(quizQuestions[thisQuestion].answers[j]);
                $("#showMe").append(thisThing);
                $("li").remove(".howTo");

            }
            $("li").on("click", function() {
                if (quizQuestions[thisQuestion].correct === $("li")) {
                    $("#showMe").text("Correct!").append("<li>");
                    showQuestion();
                }
                else {
                    $("#showMe").text("Incorrect!").append("<li>");
                    //subtract 10 seconds
                    showQuestion();
                }
            });

            //$(".showMe").append($("<li>").text(quizQuestions[thisQuestion].answers[0]));
            //$(".showMe").append($("<li>").text(quizQuestions[thisQuestion].answers[1]));
            //$(".showMe").append($("<li>").text(quizQuestions[thisQuestion].answers[2]));
            //$(".showMe").append($("<li>").text(quizQuestions[thisQuestion].answers[3]));
            // quizQuestions[i].answers.forEach(function (e) {
            //     $(".showMe").append("<li>").text(e);
            // });
            // for (let j = 0; j < 4; j++) { 
                 
            //     $(".showMe").append("<li>").text(quizQuestions[i].answers[j]);
            // }
        }
    }
    }
$("#startMe").on("click", function(){
    $(this).hide();

    let seconds = 75;
    let setTimer = setInterval(timer, 1000);
    
    function timer() {
        seconds--;
        if (seconds < 0) {
            clearInterval(setTimer);
            $("button").on("click", function () {
                $(this).show();
            })
            return;
        }
        $(".countdown").text(seconds);
    }
});


//clearInterval (setTimer);
$("#startMe").on("click", showQuestion);

// can you make answers random among their own array?

// event listener for start

// event listener for question answered

//event listener for input

// function for randomquestion
});