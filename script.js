const questions = [
    {
        question: "What is the main ingredient in meringues?",
        answers: {
            one: "Sugar",
            two: "Water",
            three: "Egg yolks",
            four: "Egg whites"
        },
        correctAnswer: "4"
    },{
        question: "First question?",
        answers: {
            one: "answer",
            two: "answer",
            three: "answer",
            four: "answer"
        },
        correctAnswer: "3"
    },{
        question: "First question?",
        answers: {
            one: "answer",
            two: "answer",
            three: "answer",
            four: "answer"
        },
        correctAnswer: "3"
    },{
        question: "First question?",
        answers: {
            one: "answer",
            two: "answer",
            three: "answer",
            four: "answer"
        },
        correctAnswer: "3"
    },{
        question: "First question?",
        answers: {
            one: "answer",
            two: "answer",
            three: "answer",
            four: "answer"
        },
        correctAnswer: "3"
    },
]

var score = 0;
var timer = 0;

var startButton = $('#start-button');
var startBlock = $('#start-block');
var quizBlock = $('#quiz-block');

function startGame() {
    timer = 100;
    console.log(timer);
}

startButton.click(function() {
    quizBlock.removeClass('hide');
    quizBlock.addClass('show');
    startBlock.removeClass('show');
    startBlock.addClass('hide');
    startGame();
});