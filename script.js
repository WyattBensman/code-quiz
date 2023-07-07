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
const messageContainer = document.querySelector('#messageContainer');

let currentQuestionIndex = 0;
let randomQuestionOrder = [];
let timerInterval;

// Start Quiz
introBtn.addEventListener("click", () => {
    introSection.style.display = "none";
    questionSection.style.display = "flex";
    setTime();
    shuffleQuestions();
    currentQuestionIndex = 0;
    displayQuestion();
});

// Shuffle Questions
function shuffleQuestions() {
    randomQuestionOrder = questions.sort(() => Math.random() - 0.5);
}

// Display Question
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        // All questions have been answered
        displayCompletion();
        return;
    }

    const currentQuestion = randomQuestionOrder[currentQuestionIndex];

    questionTitle.textContent = currentQuestion.question;

    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
    });

    messageContainer.textContent = ''; // Clear previous message
}

// Display Question
function displayQuestion() {
    if (currentQuestionIndex >= randomQuestionOrder.length) {
        // All questions have been answered
        displayCompletion();
        return;
    }

    const currentQuestion = randomQuestionOrder[currentQuestionIndex];

    questionTitle.textContent = currentQuestion.question;

    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.addEventListener('click', () => {
            const selectedAnswer = button.textContent;
            const currentQuestion = randomQuestionOrder[currentQuestionIndex];

            if (selectedAnswer === currentQuestion.answer) {
                // Correct answer
                messageContainer.textContent = 'Correct!';
            } else {
                // Incorrect answer
                messageContainer.textContent = 'Incorrect!';
            }

            currentQuestionIndex++;

            // Display the next question or handle quiz completion
            if (currentQuestionIndex >= randomQuestionOrder.length) {
                // All questions have been answered
                displayCompletion();
            } else {
                // Display the next question
                displayQuestion();
            }
        });
    });

    messageContainer.textContent = ''; // Clear previous message
}

// Calculate Correct Answers
function calculateCorrectAnswers() {
    let correctAnswers = 0;

    randomQuestionOrder.forEach((question, index) => {
        const selectedAnswer = optionButtons[index].textContent;
        if (selectedAnswer === question.answer) {
            correctAnswers++;
        }
    });

    return correctAnswers;
}


// Display Completion
function displayCompletion() {
    const correctAnswers = calculateCorrectAnswers();

    questionSection.style.display = "none";
    doneSection.style.display = "flex";

    // Display the number of correct answers
    messageContainer.textContent = `You answered ${correctAnswers} out of ${questions.length} questions correctly.`;
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
        timeElement.textContent = `Time: ${secondsLeft} `;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000);
};
