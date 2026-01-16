const cards = document.querySelectorAll('.card');

function bindCards() {
    for(let c = 0 < cards.length; c++;){
        cards[c].addEventListener('click', handleCellClick);
    }
}