let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard
let blackJack = false
let message = ""
let playing = true
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "BLACKJACK!!!"
    blackJack = true
} else {
    message = "Sorry, you lost, try again!!!"
    playing = false
}