let startTime;
let timerElement = document.getElementById("timer");
let timerInterval;

function startTimer() {
    if (!timerInterval) {
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    timerElement.textContent = "00:00:00";
}

function updateTimer() {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor((elapsedTime % 3600000) / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    timerElement.textContent = hours + ":" + minutes + ":" + seconds;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
