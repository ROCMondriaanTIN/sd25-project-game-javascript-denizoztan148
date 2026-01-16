function handleCellClick(event){
    console.log(event.target.id);
    setFiche(event.target.id, "X");
    showFiches();
}