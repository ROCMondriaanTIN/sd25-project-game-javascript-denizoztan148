function handleCardClick(event){
    console.log(event.target.id);
    console.log(firstCard);

    if (firstCard==-1) {
        firstCard=Number(event.target.id);
        window.alert(firstCard);
    } else {
        secondCard=event.target.id;
    }
    
    showCards();
    console.log(cards);
}