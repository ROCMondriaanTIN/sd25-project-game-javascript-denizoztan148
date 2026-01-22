const cardsdivs = document.querySelectorAll('.memory-game div');

function bindCards() {
    for (let c = 0; c < cardsdivs.length; c++) {
        cardsdivs[c].addEventListener('click', handleCardClick);
        cardsdivs[c].textContent = '';
        cardsdivs[c].classList.remove('flipped');
    }
}

function showCards() {
    for (let i = 0; i < cardsdivs.length; i++) {
        if(viewCards[i] == 1 || viewCards[i] == 2) {
            cardsdivs[i].innerHTML = cards[i];
            cardsdivs[i].classList.add('flipped');
        } else {
            cardsdivs[i].innerHTML = '';
            cardsdivs[i].classList.remove('flipped');
        }
    }
}