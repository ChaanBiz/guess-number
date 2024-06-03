const prompt = require("prompt-sync")();
const target = Math.round(Math.random() * 100)

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

    continue
}

console.log("Caught the luck by", luck, "tries!")
