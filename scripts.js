const recipes = {
    mojito: 'Zutaten: Minze, Limette, Zucker, Eis, Weißer Rum, Sodawasser.<br>Zubereitung: Limetten und Minze muddeln, Zucker hinzufügen, mit Eis auffüllen, Rum hinzufügen und mit Sodawasser auffüllen.',
    latte: 'Zutaten: Espresso, Milch.<br>Zubereitung: Einen Espresso zubereiten und in ein Glas geben. Milch aufschäumen und vorsichtig über den Espresso gießen.',
    // Weitere Rezepte hier
};

function showRecipe(drink) {
    const recipeElement = document.getElementById('recipe');
    const modal = document.getElementById('recipeModal');
    recipeElement.innerHTML = recipes[drink];
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.classList.add('hidden');
}
