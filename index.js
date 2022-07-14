const cards = [
    { card: "A", prize: 500, score: 1 },
    { card: 2, prize: 100, score: 2 },
    { card: 3, prize: 100, score: 3 },
    { card: 4, prize: 100, score: 4 },
    { card: 5, prize: 100, score: 5 },
    { card: 6, prize: 100, score: 6 },
    { card: 7, prize: 100, score: 7 },
    { card: 8, prize: 100, score: 8 },
    { card: 9, prize: 100, score: 9 },
    { card: 10, prize: 100, score: 10 },
    { card: "J", prize: 500, score: 10 },
    { card: "Q", prize: 500, score: 10 },
    { card: "K", prize: 500, score: 10 },
];
const cardsNew = [];
const tbody = document.getElementById("cardsList");
const drawButton = document.getElementById("drawButton");
drawButton.addEventListener("click", renderCards);
const randArray = () => {
    const rand = Math.floor(Math.random() * cards.length);
    const rValue = cards[rand];
    cardsNew.push(rValue);
    return rValue;
};