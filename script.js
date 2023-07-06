let timeElement = document.querySelector('#time')

let secondsLeft = 76;

function setTime() {
    let timerInterval = setInterval(() => {
        secondsLeft--;
        timeElement.textContent = `Time: ${secondsLeft}`;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }
    }, 1000);
};
