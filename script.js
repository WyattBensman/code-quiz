// Questions
let questions = [
    {
        question: "What is my favorite food?",
        options: ["chicken", "steak", "carrots", "leaf"],
        answer: "leaf"
    },
    {
        question: "What is my favorite salad?",
        options: ["chicken", "steak", "carrots", "leaf"],
        answer: "leaf"
    },
    {
        question: "What is my favorite dog?",
        options: ["my dog", "her dog", "she dog", "dog"],
        answer: "my dog"
    },
    {
        question: "What is my favorite dish?",
        options: ["chicken", "steak", "carrots", "leaf"],
        answer: "leaf"
    },
    {
        question: "What is my favorite spinach?",
        options: ["chicken", "steak", "carrots", "leaf"],
        answer: "leaf"
    },
]


// Section References
const introSection = document.querySelector('#introSection');
const questionSection = document.querySelector('#questionSection');
const doneSection = document.querySelector('#doneSection');
const highScoresSection = document.querySelector('#highScoresSection');

const introBtn = document.querySelector('#introBtn');
const highScores = document.querySelector('.navbar-brand')
const goBackBtn = document.querySelector('#goBack')
const questionTitle = document.querySelector('#questionTitle');
const optionButtons = document.querySelectorAll('.optionBtn');


// Start Quiz
introBtn.addEventListener("click", () => {
    introSection.style.display = "none";
    questionSection.style.display = "flex";
    setTime();
    displayQuestion();
});

// Display Question
function displayQuestion() {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    questionTitle.textContent = randomQuestion.question;

    optionButtons.forEach((button, index) => {
        button.textContent = randomQuestion.options[index];
    });
}

// View High Scores
highScores.addEventListener("click", () => {
    introSection.style.display = "none";
    questionSection.style.display = "none";
    doneSection.style.display = "none";
    highScoresSection.style.display = "flex";
})

// Go Back in High Scores
goBackBtn.addEventListener("click", () => {
    highScoresSection.style.display = "none";
    introSection.style.display = "flex";
})



// Time Interval
let timeElement = document.querySelector('#time')

let secondsLeft = 76;

function setTime() {
    let timerInterval = setInterval(() => {
        secondsLeft--;
        timeElement.textContent = `Time: ${secondsLeft}`;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000);
};
