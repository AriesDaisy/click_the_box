let score = 0;
let time = 30;
const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const gameOverDisplay = document.getElementById('game-over');
let intervalId;

function createBox() {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.top = Math.random() * (gameContainer.clientHeight - 50) + 'px';
    box.style.left = Math.random() * (gameContainer.clientWidth - 50) + 'px';
    box.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
        box.remove();
    });
    gameContainer.appendChild(box);
}

function startGame() {
    intervalId = setInterval(createBox, 1000);
    const timerId = setInterval(() => {
        time--;
        timerDisplay.textContent = 'Time: ' + time;
        if (time <= 0) {
            clearInterval(intervalId);
            clearInterval(timerId);
            gameOverDisplay.style.display = 'block';
        }
    }, 1000);
}

startGame();