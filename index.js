let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let blackJack = false
let message = ""
let playing = true
let message1 = document.getElementById("message1")
let scoreField = document.getElementById("scoreId")
let cardsField = document.getElementById("cardsId")

function gameStart() {
    game()
}

function game() {
    cardsField.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsField.textContent += cards[i] + " "
    }
    scoreField.textContent = "Score: " + sum
    if (sum <= 20) {
        message = "Want a new card?"
    } else if (sum === 21) {
        message = "BLACKJACK!!! YOU WIN - Play again soon :D"
        blackJack = true
    } else {
        message = "Sorry, you lost, try again!!!"
        playing = false
    }
    message1.textContent = message
}

function drawCard() {
    console.log("Drawing a new card!")
    let cardDrawed = 7
    sum += cardDrawed;
    cards.push(cardDrawed)
    gameStart()
    console.log(cards)
}