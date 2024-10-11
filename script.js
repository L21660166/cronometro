let timer;
let seconds = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            document.getElementById('time').textContent = formatTime(seconds);
        }, 1000);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    document.getElementById('time').textContent = formatTime(seconds);
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}
