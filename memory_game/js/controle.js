function handleCardClick(event) {
    if (lockBoard || victory) return;

    const idx = Number(event.target.id);
    if (viewCards[idx] !== 0) return;

    viewCards[idx] = 1;
    showCards();

    const flippedCards = viewCards.filter(v => v === 1).length;

    if (flippedCards === 2) {
        lockBoard = true;
        setTimeout(checkMatch, 800);
    }
}

function checkMatch() {
    const firstIdx = viewCards.indexOf(1);
    const secondIdx = viewCards.lastIndexOf(1);

    if (cards[firstIdx] === cards[secondIdx]) {
        viewCards[firstIdx] = 2;
        viewCards[secondIdx] = 2;
        addScore();
    } else {
        viewCards[firstIdx] = 0;
        viewCards[secondIdx] = 0;
    }

    showCards();
    lockBoard = false;
    checkVictory();
}

function addScore() {
    score += 12.5;
    document.getElementById("score").innerText = "Score: " + score;
}

function checkVictory() {
    for (let i = 0; i < viewCards.length; i++) {
        if (viewCards[i] !== 2) return;
    }

    victory = true;
    setTimeout(() => {
        alert("🎉U hebt gewonnen!🎉");
    }, 300);
}