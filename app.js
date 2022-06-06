const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
let inputNumber = document.querySelector('.enter-timer')

// playButton.addEventListener('click', () => {
//     console.log('hi')
// })

console.log(inputNumber)
let receivedNumber = inputNumber.innerText
console.log(receivedNumber)
const end = 0
// if (receivedNumber > end) {
//   Play()
// } else {
//   Stop()
// }

Play()

function Play() {
  const countdownNumber = setInterval(() => {
    inputNumber.innerHTML = receivedNumber
    if (receivedNumber <= 0) {
      clearInterval(countdownNumber)
    }
    receivedNumber = receivedNumber - 1
    console.log(receivedNumber)
  }, 1000)
  console.log(countdownNumber)
}

// pauseButton.addEventListener('click', () => {
//     clearInterval(countdownNumber)
// })

// setInterval(() => {
//     receivedNumber = receivedNumber - 1
// }, 1000)
// const countdownNumber = setInterval(() => {
//     receivedNumber = receivedNumber - 1
// }, 1000)
// console.log(countdownNumber)

// function Timer() {
//     while(receivedNumber > 0) {

//     }
// }

// const countdown = setInterval(Timer, 1000)
