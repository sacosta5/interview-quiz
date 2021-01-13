var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var countDownDate = new Date("Date.now").getTime()

let shuffledQuestions, currentQuestionIndex

//start function after clicking start
var sartGame = function(){
    startButton.classList.add("hide");
    
    //cycle through questions randomly
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0

    questionContainerElement.classList.remove("hide");
    
    //Call the function next question to reset current one with a new one 
    setNextQuestion();
};
// after answering question bring in next shuffled question and clear previous question
var setNextQuestion = function() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

//setting timer for quiz
var x = setInterval(function() {
    
    //current date and time 
    var now = new Date().getTime();

    //distance between now and the count down date 
    var distance = countDownDate - Math.floor((distance * 60 * 60)) / (10000 * 60));
    // Time calculations for minutes and seconds 
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //put out the result of the time in HTML with the id demo from the p element
    document.getElementById("demo").innerHTML = minutes + "m" + seconds + "s";

    //once the coundown expires notify the user 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Your Time Is Up!";
    }
}, 1000);


//showcase questions one by one 
var showQuestion = function(question) {
    questionElement.innerText = question.question

    // looping through our questions here
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })

};

//function to reset the state of the question
var resetState = function() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

};


var selectAnswer = function(e) {
    var selectedtedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(docoument.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
     setStatusClass(button, button.dataset.correct)
    })
    // if we run out of questions then prompt with reset button to reset
    if (shuffledQuestions.lenght > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide)")
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove("hide")
    }

    nextButton.classList.remove("hide")
};

var setStatusClass = function(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
};

var clearStatusClass = function(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
};

// questions set here to be recalled by the start game and set next question function
var questions = [
    {
        question: "What is HTML for?",
        answers: [
            { text: "create the backbone of the website", correct: true},
            {text: "make functions possible", correct: false}
        ]
    },
    {
         question: "What is CSS for?",
        answers: [
            { text: "to style the HTML", correct: true},
            { text: "make functions possible", correct: false}
        ]
    },
    { question: ""}
];