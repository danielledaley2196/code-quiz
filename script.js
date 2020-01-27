
$(document).ready(function() {
let quizQuestions = [{
    qText: "What is JavaScript?",
    answers: [
        "A font style.",
        "A delicious snack.",
        "It makes your website do things.",
        "It makes your website look pretty"
    ],
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



function showQuestion () {
    
    for (let i = 0; i < 1; i++) {
        let thisQuestion = Math.floor(Math.random() * quizQuestions.length);

        if (quizQuestions[thisQuestion].isused === false) {
            
             $(".information").text(quizQuestions[thisQuestion].qText);
        
            thisQuestion.isused = true;
            
            
            for (let j = 0; j < 4; j++){
                let thisThing = $("<li>").addClass("myCheck btn btn-outline-success");
                thisThing.text(quizQuestions[thisQuestion].answers[j]);
                $("#showMe").append(thisThing).append("<br />");
                $("li").remove(".howTo");

            }
            $("li").on("click", function() {
                if (this === quizQuestions[thisQuestion].correct) {
                    $("#showMe").text("Correct!");
                    showQuestion();
                }
                else {
                    
                     $("#showMe").text("Incorrect!");
                    //subtract 10 seconds
                    showQuestion();
                }
            });
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


$("#startMe").on("click", showQuestion);

});