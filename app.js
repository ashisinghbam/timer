const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
let inputNumber = document.querySelector('input')
const resetButton = document.querySelector('.reset')
let countdownNumber
let receivedNumber

console.log(inputNumber.value)
console.log(inputNumber)
receivedNumber = inputNumber.value

inputNumber.addEventListener('input', () => {
  receivedNumber = inputNumber.value
})

function Play() {
  if (receivedNumber > 0 && receivedNumber != 0) {
    countdownNumber = setInterval(() => {
      if (receivedNumber <= 1) {
        clearInterval(countdownNumber)
      }
      receivedNumber = receivedNumber - 1
      inputNumber.value = receivedNumber
      console.log(receivedNumber)
    }, 1000)
  }
  
}

pauseButton.addEventListener('click', () => {
  clearInterval(countdownNumber)
})

playButton.addEventListener('click', Play)


resetButton.addEventListener('click', () => {
  inputNumber.value = 0
  clearInterval(countdownNumber)
})
