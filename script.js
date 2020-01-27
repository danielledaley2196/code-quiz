
$(document).ready(function() {
const quizQuestions = [{
    qText: "What is JavaScript?",
    answers: [
        "A font style.",
        "A delicious snack.",
        "It makes your website do things.",
        "It makes your website look pretty"
    ],
    isused: false,
    correct: 0,
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
    correct: 0,
},
 {
    qText: "How do you create a function in JavaScript?",
    answers: [
        "function myFunction()",
        "function = myFunction()",
        "the function()",
        "function:myFunction()"
    ],
    correct: 0,
    isused: false,
},
{
    qText: "How do you round the number 7.25, to the nearest integer?",
    answers: [
        "rnd(7.25)",
        "Math.round(7.25)",
        "round(7.25)",
        "Math.rnd(7.25)"
    ],
    isused: false,
    correct: 1,
},
{
    qText: "How does a FOR loop start?",
    answers: [
        "for (i = 0; i <= 5; i++)  ",
        "for (i = 0; i <= 5)",
        "for i = 1 to 5",
        "for (i <= 5; i++)"
    ],
    isused: false,
    correct: 1,
},
];



function showQuestion () {
    
    for (let i = 0; i < 1; i++) {
        let thisQuestion = Math.floor(Math.random() * quizQuestions.length);

        if (quizQuestions[thisQuestion].isused === false) {
            
             $(".information").text(quizQuestions[thisQuestion].qText);
        
            thisQuestion.isused = true;
            
            
            for (let j = 0; j < 4; j++){
                let thisThing = $("<li>").addClass("target btn btn-outline-success");
                thisThing.text(quizQuestions[thisQuestion].answers[j]);
                $("#showMe").append(thisThing).append("<br />");
                $("li").remove(".howTo");
                
            }
            $("li").on("click", function() {
                if ($(this).is(quizQuestions[thisQuestion].correct)) {
                    $("#showMe").text("Correct!");
                    showQuestion();
                }
                else {
                    
                     $("#showMe").text("Incorrect!");
                
                   
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
        else {

        }
        $(".countdown").text(seconds);
    }
});


$("#startMe").on("click", showQuestion);

});
function addHighScore (num, init) {
    let score = localStorage.getItem("hiScoreList");
    if (num < 0) {
        num = 0;
    }
    if (scores === null){
        scores = [];
      }
      else {
        scores = JSON.parse(scores);
      }

      scores.unshift({
        score: num, 
        name: init
      });
      localStorage.setItem("hiScoreList", JSON.stringify(scores));
}
