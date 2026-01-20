const cardsdivs = document.querySelectorAll('.memory-game  div');

function bindCards() {
    
    for(let c = 0; c < cardsdivs.length; c++){
        cardsdivs[c].addEventListener('click', handleCardClick);
    }
    
}

function showCards()
{
    window.alert(firstCard);
    if (firstCard!=-1)
            cardsdivs[firstCard]="X";
    
}