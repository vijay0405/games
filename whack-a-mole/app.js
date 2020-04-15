const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let currTime = timeLeft.textContent

function randomSquare() {
    square.forEach((className)=>{
        className.classList.remove('mole')
    })

    let randomPos = square[Math.floor(Math.random() * 9)]

    randomPos.classList.add('mole')
    hitPos = randomPos.id
}

square.forEach((id)=>{
    id.addEventListener('mouseup', ()=>{
        if(id.id == hitPos) {
            result += 1
            score.textContent = result
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000);
}

moveMole()

function countDown() {
    currTime -= 1
    timeLeft.textContent = currTime

    if(currTime == 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your Score is: ' + result)
    }
}

let timerId = setInterval(countDown, 1000)