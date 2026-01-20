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
        if (typeof matched !== 'undefined' && (matched[i] || i === firstCard || i === secondCard)) {
            cardsdivs[i].textContent = cards[i];
            cardsdivs[i].classList.add('flipped');
        } else {
            cardsdivs[i].textContent = '';
            cardsdivs[i].classList.remove('flipped');
        }
    }
}