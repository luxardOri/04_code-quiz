// Questions for the quiz
const questions = [
    {
        question: "What is the main ingredient in meringues?",
        answers: ["Sugar","Water","Egg yolks","Egg whites"],
        correctAnswer: 3
    },{
        question: "What is typically NOT used in making caramel?",
        answers: ["Honey","Cream","Sugar","Butter"],
        correctAnswer: 0
    },{
        question: "Which of the following desserts are made of puff pastry?",
        answers: ["Cannele","Palmier","Pudim de leite","Croquembouche"],
        correctAnswer: 1
    },{
        question: "First question?",
        answers: ["answer","answer","answer","answer"],
        correctAnswer: 2
    },{
        question: "First question?",
        answers: ["answer","answer","answer","answer"],
        correctAnswer: 2
    },{
        question: "First question?",
        answers: ["answer","answer","answer","answer"],
        correctAnswer: 2
    },{
        question: "First question?",
        answers: ["answer","answer","answer","answer"],
        correctAnswer: 2
    },{
        question: "First question?",
        answers: ["answer","answer","answer","answer"],
        correctAnswer: 2
    },{
        question: "First question?",
        answers: ["answer","answer","answer","answer"],
        correctAnswer: 2
    },{
        question: "First question?",
        answers: ["answer","answer","answer","answer"],
        correctAnswer: 2
    }
]

var startButton = $('#start-button');
var startBlock = $('#start-block');
var quizBlock = $('#quiz-block');
var showQuest = $('#question');
var showAns = $('#answers');

var score = 0;
var timer = 0;

// This function is used to set the timer and will use setInterval to get timer to work
function setTimer() {
    timer = 120;
};

// Will use this function to set the score for the game. I will need to set it so it will store in local storage, so even if I reload the page it will show who has the highest score.
function setScore() {
    score = 0;
}

// This will show the questions and answers to be selected. 
function showQuestions() { 
    showQuest.text(questions[0].question);

    questions[0].answers.forEach(answers => {
        showAns.text(questions[0].answers);
    });

};

// When user clicks on the start button, this hides the main page and starts the quiz
startButton.on('click', function() {
    quizBlock.removeClass('hide');
    quizBlock.addClass('show');
    startBlock.removeClass('show');
    startBlock.addClass('hide');
    showQuestions();
});

