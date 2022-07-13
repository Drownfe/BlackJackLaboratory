let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let blackJack = false
let message = ""
let playing = true
let message1 = document.getElementById("message1")
console.log(message1)

function gameStart() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "BLACKJACK!!!"
        blackJack = true
    } else {
        message = "Sorry, you lost, try again!!!"
        playing = false
    }
    message1.textContent = message
}