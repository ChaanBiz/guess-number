const prompt = require("prompt-sync")();
const target = Math.round(Math.random() * 100)
console.log(target)

const guess = Number(prompt("Guess the number (0-100): "))

let luck = 0

if (guess > target) {
    console.log("Quite high.")
} else if (guess === target) {
    console.log("Guessed!")
} else {
    console.log("Too low.")
}