const prompt = require("prompt-sync")();
const target = Math.round(Math.random() * 100)

console.log(target)

let luck = 0

while(true) {
    luck++
    
    const guess = Number(prompt("Guess the number (0-100): "))

    if (guess > target) {
        console.log("Quite high.")
    } else if (guess < target) {
        console.log("Too low")
    } else {
        console.log("Wise guess.")
        break
    }
}

console.log("Caught the luck by", luck, "tries!")