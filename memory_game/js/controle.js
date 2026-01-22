
function handleCardClick(event){
    if (lockBoard) return;

    const idx = Number(event.target.id);
    if (viewCards[idx] !== 0) return;

    if(isFirstCard()) {
        viewCards[idx] = 1;
        showCards();
    } else {
        viewCards[idx] = 1;
        showCards();
        lockBoard = true;

        setTimeout(() => {
            handleCheckMatch();
            lockBoard = false;
        }, 800);
    }

    function handleCheckMatch() {
        const firstIdx = viewCards.indexOf(1);
        const secondIdx = viewCards.lastIndexOf(1);

        if(cards[firstIdx] == cards[secondIdx]) {
            viewCards[firstIdx] = 2;
            viewCards[secondIdx] = 2;
        } else {
            viewCards[firstIdx] = 0;
            viewCards[secondIdx] = 0;
        }

        showCards();
    }

    let victory = true;

    for (let i = 0; i < viewCards.length; i++){
        if (viewCards[i] !==2) {
            victory = false;
            break;
        }
    }

    if (victory) {
        setTimeout(() => {
            alert("U hebt gewonnen!");
        }, 300)
    }
}