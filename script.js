import Ball from "./Ball.js"
import Paddle from "./Paddle.js "

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElement = document.getElementById("play-score")
const computerScoreElement = document.getElementById("computer-score")

let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect() ])
        computerPaddle.update(delta, ball.y)

        if (hasLost()) handleLost()
    }
    lastTime = time
    window.requestAnimationFrame(update)
}

function handleLost() {
    const rect = ball.rect()
    if  (rect.right >= window.innerWidth) {
        playerScoreElement.textContent = parseInt(playerScoreElement.textContent) + 1
    }   else {
        computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1
    }
    ball.reset()
    computerPaddle.reset()
}

function hasLost() {
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
}

document.addEventListener("mousemove", e => {
    playerPaddle.position =(e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)
