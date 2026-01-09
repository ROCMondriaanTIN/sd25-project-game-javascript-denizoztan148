const memoryGame = document.getElementById("memoryGame");

const cards = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍓", "🍓", "🍒", "🍒", "🍍", "🍍", "🍉", "🍉", "🍋", "🍋"];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

cards.sort(() => 0.5 - Math.random());