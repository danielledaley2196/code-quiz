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
let quizQuestions = [{
    q1 = {
    qText = "What is JavaScript?",
    answers = [
        "A font style.",
        "A delicious snack.",
        "It makes your website do things.",
        "It makes your website look pretty",
    ],
    //have some way to check if it has been used
    isused = false,
    correct = "It makes your website do things.",
}},
{q2 = {
    qText = "What is console.log () used for?",
    answers = [
        "Puts information into the web console.",
        "Runs a function.",
        "Returns the data with an alert box.",
        "Refreshes the screen.",
    ],
    isused = false,
    correct = "Puts information into the web console.",
}},
{q3 = {
    qText = "q3",
    answers = [
        "1",
        "2",
        "3",
        "4",
    ],
    isused = false,
    correct = "4",
}},
{q4 = {
    qText = "q4",
    answers = [
        "1",
        "2",
        "3",
        "4",
    ],
    isused = false,
    correct = "2",
}},
{q5 = {
    qText = "q5",
    answers = [
        "1",
        "2",
        "3",
        "4",
    ],
    isused = false,
    correct = "3"
}},
{q6 = {
    qText = "q6",
    answers = [
        "1",
        "2",
        "3",
        "4",
    ],
    isused = false,
    correct = "1",
}},
{q7 = {
    qText = "q7",
    answers = [
        "1",
        "2",
        "3",
        "4",
],
    isused = false,
    correct = "3"
}},
{q8 = {
    qText = "q8",
    answers = [
        "1",
        "2",
        "3",
        "4",
    ],
    isused = false,
    correct = "2",
}},
{q9 = {
    qText = "q9",
    answers = [
        "1",
        "2",
        "3",
        "4",
    ],
    isused = false,
    correct = "3",
}},
{q10 = {
    qText = "q10",
    answers = [
        "1",
        "2",
        "3",
        "4",
    ],
    isused = false,
    correct = "3",
}},];


// function for random questiomn and answers
function showQuestion (questions, ) {
    let question = [];
    for (i = 0; i < 10; i++) {
        question.push(questions[i].qText);
        questions[i].answers.sort(function(){
            return(0.5-Math.random())
        });
        }
    console.log(question) 

    let askMe = Math.floor(Math.random() * question.length)
    if (isused === false) {
        //tie to information header
        $(".information").innerText(askMe);
        isused = true;
        $(".showMe").replace(showMe.innerText) = $(<ul></ul>).append.$(<li></li>).answers;
    }
}


// can you make answers random among their own array?

// event listener for start

// event listener for question answered

//event listener for input

// function for randomquestion