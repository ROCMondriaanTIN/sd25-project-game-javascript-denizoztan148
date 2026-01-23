const memoryGame = document.getElementById("memoryGame");

const cards = ["🍎","🍎","🍌","🍌","🍇","🍇","🍓","🍓","🍒","🍒","🍍","🍍","🍉","🍉","🍋","🍋"];
let viewCards = new Array(16).fill(0);

let lockBoard = false;
let score = 0;
let victory = false;

cards.sort(() => 0.5 - Math.random());
 