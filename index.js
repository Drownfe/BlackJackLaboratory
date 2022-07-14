let player = {
    name: "Juan",
    prize: 0,
    hello: function() {
        console.log("Good Mythical Morning!!!")
    }
}

let cards = []
let score = 0
let isBlackJack = false
let message = ""
let playing = false
let message1 = document.getElementById("message1")
let scoreField = document.getElementById("scoreId")
let cardsField = document.getElementById("cardsId")
let playerField = document.getElementById("playerElement")
playerField.textContent = player.name + ": $" + player.prize


function randomCard() {
    let randomCardNumber = Math.floor(Math.random() * 13) + 1
    if (randomCardNumber > 10) {
        return 10
    } else if (randomCardNumber === 1) {
        return 11
    } else {
        return randomCardNumber
    }
}

function gameStart() {
    playing = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    score = firstCard + secondCard
    game()
}

function game() {
    cardsField.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsField.textContent += cards[i] + " "
    }
    scoreField.textContent = "Score: " + score
    if (score <= 20) {
        message = "Want a new card?"
    } else if (score === 21) {
        message = "BLACKJACK!!! YOU WIN - Play again soon :D"
        isBlackJack = true
    } else {
        message = "Sorry, you lost, try again!!!"
        playing = false
    }
    message1.textContent = message
}

function drawCard() {
    if (playing === true && isBlackJack === false) {
        let cardDrawed = randomCard()
        score += cardDrawed;
        cards.push(cardDrawed)
        game()
    }
}