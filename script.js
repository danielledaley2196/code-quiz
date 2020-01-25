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
}},
{q2 = {
    qText = "What is console.log () used for?",
    answers = [
        "Put information into the web console.",
        "Runs a function.",
        "Returns the data with an alert box.",
        "Refreshes the screen.",
    ],
    isused = false,
}},
{q3 = {
    qText = "",
    answers = [],
    isused = false,
}},
{q4 = {
    qText = "",
    answers = [],
    isused = false,
}},
{q5 = {
    qText = "",
    answers = [],
    isused = false,
}},
{q6 = {
    qText = "",
    answers = [],
    isused = false,
}},
{q7 = {
    qText = "",
    answers = [],
    isused = false,
}},
{q8 = {
    qText = "",
    answers = [],
    isused = false,
}},
{q9 = {
    qText = "",
    answers = [],
    isused = false,
}},
{q10 = {
    qText = "",
    answers = [],
    isused = false,
}},];


// function for random questiomn and answers


// can you make answers random among their own array?

// event listener for start

// event listener for question answered

//event listener for input

// function for randomquestion