const memoryGame = document.getElementById("memoryGame");

const cards = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍓", "🍓", "🍒", "🍒", "🍍", "🍍", "🍉", "🍉", "🍋", "🍋"];
let firstCard = -1;
let secondCard = -1;
let lockBoard = false;

cards.sort(() => 0.5 - Math.random());