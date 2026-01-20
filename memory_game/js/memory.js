const memoryGame = document.getElementById("memoryGame");

const cards = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍓", "🍓", "🍒", "🍒", "🍍", "🍍", "🍉", "🍉", "🍋", "🍋"];
let viewCards=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let lockBoard = false;
let matched = new Array(cards.length).fill(false);

cards.sort(() => 0.5 - Math.random());

function isFirstCard() {
    if (viewCards.indexOf(1)==-1) {
        return true;    
    } else {
        return false;
    }
}
