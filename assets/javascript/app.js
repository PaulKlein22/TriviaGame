
//
// Unfortunately, I was not able to get the logic working on this game. I don't know where the issue(s) stem from.
//

var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var timeRemaining = 10;
var intervalID;
var indexQandA = 0;
var answered = false;
var correct;

var allQuestions = [
    { question: "Which young Jedi Knight becomes Darth Vader?", answer: ["Obi-Wan Kenobi", "Anakin Skywalker", "Luke Skywalker", "Mace Windu"], correct: "1" },
    { question: "What planet is home to Chewbacca and the Wookiees?", answer: ["Jakku", "Endor", "Tatooine", "Kashyyyk"], correct: "3" },
    { question: "What color is Yoda's lightsaber?", answer: ["Green", "Red", "Blue", "Violet"], correct: "0" },
    { question: "How many engines are on an X-wing starfighter?", answer: ["2", "3", "4", "6"], correct: "2" },
    { question: "What bounty hunter captures Han Solo?", answer: ["Boba Fett", "Chewbacca", "Jango Fett", "Jabba the Hutt"], correct: "0", },
    { question: "What animals attach themselves to the Millennium Falcon?", answer: ["Mynocks", "Banthas", "Taun-Tauns", "Space Slug"], correct: "0", },
    { question: "Whose DNA were the clones made from?", answer: ["Boba Fett", "Darth Vader", "Obi-Wan Kenobi", "Jango Fett"], correct: "3", },
    { question: "Padme Amidala is first queen of, and then the senator from, what peaceful planet?", answer: ["Hoth", "Coruscant", "Naboo", "Tatooine"], correct: "2", }
    { question: "What is Han and Leia's son's birth name?", answer: ["Anakin", "Jacen", "Luke", "Ben"], correct: "3", }
    { question: "What was Finn's occupation prior to joining the Resistance?", answer: ["Jedi Knight", "Stoemtrooper", "Starfighter Pilot", "Senator"], correct: "1", }
];

function startGame() {
    $('.btn').remove();
    correctAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;
    loadQandA();
}

function loadQandA() {
    answered = false;
    timeRemaining = 10;
    intervalID = setInterval(timer, 1000);
    if (answered === false) {
        timer();
    }
    correct = allQuestions[indexQandA].correct;
    var question = allQuestions[indexQandA].question;
    $('.question').html(question);
    for (var i = 0; i < 4; i++) {
        var answer = allQuestions[indexQandA].answer[i];
        $('.answers').append('<h3 class= allAnswers id=' + i + '>' + answer + '</h3>');
    }

    $("h3").click(function () {
        var id = $(this).attr('id');
        if (id === correct) {
            answered = true;
            $('.question').text("Correct!");
            correctAnswer();
        }
        else {
            answered = true;
            $('.question').text("Incorrect. The correct answer is: " + allQuestions[indexQandA].answer[correct]);
            incorrectAnswer();
        }
    });
}

function timer() {
    if (timeRemaining === 0) {
        answered = true;
        clearInterval(intervalID);
        $('.question').text("Correct!");
        unAnswered();
    }
    else if (answered === true) {
        clearInterval(intervalID);
    }
    else {
        timeRemaining--;
        $('.timeRemaining').text(timeRemaining + ' seconds remaining');
    }
}

function correctAnswer() {
    correctAnswers++;
    $('.timeRemaining').text("Correct!").css({ 'color': '#white' })
    resetRound();
}

function incorrectAnswer() {
    wrongAnswers++;
    $('.timeRemaining').text("Incorrect").css({ 'color': '#white' })
    resetRound();
}

function unAnswered() {
    unanswered++;
    $('.timeRemaining').text("Time's Up").css({ 'color': '#white' })
    resetRound();
}

function resetRound() {
    $('.allAnswers').remove();
}
    else {
    setTimeout(function () {
        $('.question').remove();
        $('.timeRemaining').remove();
        $('.answers').append('<h3 class= allAnswers end> Correct Answers: ' + correctAnswers + '</h3>');
        $('.answers').append('<h3 class= allAnswers end> Incorrect Answers: ' + wrongAnswers + '</h3>');
        $('.answers').append('<h3 class= allAnswers end> Unanswered Questions: ' + unanswered + '</h3>');
        setTimeout(function () { location.reload(); }, 5000);
    }, 4000);
}

$('.btn').on("click", function () {
    $('.btn');
});