window.onload=start;

function start(){
    bindCards();
    showCards();
}

const restart = document.getElementById("restart");
 
restart.addEventListener("click", restartGame);
 
function restartGame() {
    viewCards = new Array(cards.length).fill(0);
 
    cards.sort(() => 0.5 - Math.random());
 
    bindCards();
    showCards();
}