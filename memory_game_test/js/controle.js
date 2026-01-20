function handleCardClick(event){
    if (typeof lockBoard !== 'undefined' && lockBoard) return;
    const idx = Number(event.target.id);
    if (Number.isNaN(idx)) return;
    if (matched[idx]) return;
    if (idx === firstCard) return;

    if (firstCard === -1) {
        firstCard = idx;
        showCards();
        return;
    }

    secondCard = idx;
    showCards();

    if (cards[firstCard] === cards[secondCard]) {
        matched[firstCard] = true;
        matched[secondCard] = true;
        firstCard = -1;
        secondCard = -1;
        if (matched.every(Boolean)) {
            setTimeout(() => alert('You win!'), 200);
        }
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard = -1;
            secondCard = -1;
            lockBoard = false;
            showCards();
        }, 800);
    }
}