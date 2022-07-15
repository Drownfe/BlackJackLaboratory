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
const newGamebutton = document.getElementById("newGamebutton");
const person = document.getElementById("name");
drawButton.addEventListener("click", renderCards);
newGamebutton.addEventListener("click", newGame);
function newGame() {
    window.onload = cargar;
    swal
      .fire({
        title: "Hello!!! Please type your name :D",
        input: "text",
        confirmButtonText: "OK",
      })
      .then(async (result) => {
        if (result.value != "") {
          await Swal.fire({
            title: `Hi ${result.value}`,
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          person.innerHTML = `Hi ${result.value}`;
        } else if (result.value == "") {
          Swal.fire({
            icon: "error",
            title: "Please type your name",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
        }
      }); 
  }
  const randArray = () => {
    const rand = Math.floor(Math.random() * cards.length);
    const rValue = cards[rand];
    cardsNew.push(rValue);
    return rValue;
  };

  const loading = () => {
    for (let i = 0; i < 2; i++) {
      renderCards();
    }
    newGame()
  };
  window.onload = loading;
  function renderCards() {
    let scoreTotal = 0;
    let prizeTotal = 0;
    tbody.innerHTML = "";
    randArray();
    cardsNew.map((cardNew) => {
      const tr = document.createElement("tr");
      tr.classList.add("cardNew");
      scoreTotal = scoreTotal + cardNew.score;
      prizeTotal = prizeTotal + cardNew.prize;
      if (scoreTotal == 21) {
        drawButton.style.visibility = "hidden";
        const total = prizeTotal + 1000;
        swal.fire({
          icon: "success",
          title: "You win: $" + total,
          text: "For scoring a Blackjack, you will have $1000 extra!!!",
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else if (scoreTotal < 21) {
        swal.fire({
          icon: "info",
          title: "You can keep Drawing!!!, total prize: $" + prizeTotal,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        drawButton.style.visibility = "hidden";
        swal.fire({
          icon: "error",
          title: "We are sorry, you just lost your price for $" + prizeTotal,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
      const Content = `
       <tr>
           <th>${cardNew.card}</th>
           <th>${scoreTotal}</th>
           <th>${prizeTotal}</th>
       </tr>      
            `;
      tr.innerHTML = Content;
      tbody.append(tr);
    });
  }