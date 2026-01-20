const memoryGame = document.getElementById("memoryGame");

const cards = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍓", "🍓", "🍒", "🍒", "🍍", "🍍", "🍉", "🍉", "🍋", "🍋"];
let firstCard = -1;
let matched = new Array(cards.length).fill(false);

cards.sort(() => 0.5 - Math.random());