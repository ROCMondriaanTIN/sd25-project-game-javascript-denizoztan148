function handleCardClick(event){
    console.log('Card clicked:', event.target.id);
    if(isFirstCard()) {
        const idx = Number(event.target.id);
        viewCards[idx]=1;   
        showCards();
    } else {
        const idx = Number(event.target.id);
        viewCards[idx]=1;   
        showCards();
        setTimeout(() => {
            handleCheckMatch();
        }, 800);
    }
    

        function handleCheckMatch() {
            
            const firstIdx = viewCards.indexOf(1);
            const secondIdx = viewCards.lastIndexOf(1);
            alert('Checking match' + firstIdx + ' ' + secondIdx );
            if(cards[firstIdx] == cards[secondIdx]) {
                viewCards[firstIdx]=2;
                viewCards[secondIdx]=2;
                showCards();
            } else {
                viewCards[firstIdx]=0;
                viewCards[secondIdx]=0;
                console.log('No match');
                console.log(viewCards);
                showCards();
            }
        }

} 