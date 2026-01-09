const gameBoard = document.getElementById("gameBoard");

const cards = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍓", "🍓"];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Shuffle cards
cards.sort(() => 0.5 - Math.random());

// Create cards
cards.forEach(symbol => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = "";
  card.dataset.symbol = symbol;

  card.addEventListener("click", () => flipCard(card));

  gameBoard.appendChild(card);
});

function flipCard(card) {
  if (lockBoard) return;
  if (card === firstCard) return;

  card.textContent = card.dataset.symbol;
  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  checkMatch();
}

function checkMatch() {
  lockBoard = true;

  if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
    resetCards();
  } else {
    setTimeout(() => {
      firstCard.textContent = "";
      secondCard.textContent = "";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetCards();
    }, 1000);
  }
}

function resetCards() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}
