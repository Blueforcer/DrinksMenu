const recipes = {
    gintonic: {
        ingredients: '<ul><li>Bombay Sapphire Gin</li><li>Thomas Henry Tonic Water</li><li>Limette</li><li>Eiswürfel</li></ul>',
        image: 'gintonic.png'
    },
    cubalibre: {
        ingredients: '<ul><li>Havana</li><li>Cola</li><li>Limette</li><li>Eiswürfel</li></ul>',
        image: 'cubalibre.png'
    },
    aperol1: {
        ingredients: '<ul><li>Sekt</li><li>Aperol</li><li>Sodawasser</li><li>Orangenscheibe</li><li>Eiswürfel</li></ul>',
        image: 'aperol1.png'
    },
    aperol2: {
        ingredients: '<ul><li>Orange Spritz Sirup</li><li>Alkoholfreier Sekt</li><li>Sodawasser</li><li>Orangenscheibe</li><li>Eiswürfel</li></ul>',
        image: 'aperol2.png'
    },
    hugo: {
        ingredients: '<ul><li>Sekt</li><li>Sodawasser</li><li>Holunderblütensirup</li><li>Limette</li><li>Minzzweig</li><li>Eiswürfel</li></ul>',
        image: 'hugo.png'
    },
    hugo2: {
        ingredients: '<ul><li>Alkoholfreier Sekt</li><li>Holunderblütensirup</li><li>Zitronensaft</li><li>Limette</li><li>Minzzweig</li><li>Eiswürfel</li></ul>',
        image: 'hugo2.png'
    },
    barcadi:{
        ingredients: '<ul><li>Bacardi Razz</li><li>Sprite</li><li>Himbeeren</li><li>Eiswürfel</li></ul>',
        image: 'barcadi.png'
    },
    malibu:{
        ingredients: '<ul><li>Malibu Kokosnusslikör</li><li>Maracujasaft</li><li>Eiswürfel</li></ul>',
        image: 'malibu.png'
    },
    bier:{
        ingredients: '<ul><li>Wasser</li><li>Hopfen</li><li>Malz</li><li>Hefe</li></ul>',
        image: 'bier.png'
    },
    radler:{
        ingredients: '<ul><li>Zitronenlimo</li><li>Wasser</li><li>Hopfen</li><li>Malz</li><li>Hefe</li></ul>',
        image: 'bier.png'
    },
    sekt:{
        ingredients: '<ul><li>Grundwein</li><li>Hefe</li><li>Zucker</li></ul>',
        image: 'sekt.png'
    },
    AlkoholfreiesBier:{
        ingredients: 'Alkoholfreies Bier ist wie ein BH auf der Wäscheleine. Das beste ist raus.',
        image: 'bier.png'
    },
    AlkoholfreierSekt:{
        ingredients: '“Ein Sekt bitte!” “Alkoholfrei?” “Nein, lactosefrei” “Wollen Sie mich verarschen?” “Wer hat denn damit angefangen?”',
        image: 'sekt.png'
    },
    softdrinks:{
        ingredients:'Cola, Fanta, Sprite usw.',
        image: 'saft.png'
    },
    saft:{
        ingredients: 'Verschiedene Auswahl',
        image: 'saft.png'
    },
    wasser:{
        ingredients: 'H2O',
        image: 'wasser.png'
    },
    eistee:{
        ingredients: 'Teekanne frio Eistee',
        image: 'eistee.png'
    },
};

function showRecipe(drink) {
    const recipeElement = document.getElementById('recipe');
    const modal = document.getElementById('recipeModal');
    const recipe = recipes[drink];
    recipeElement.innerHTML = `<img src="${recipe.image}" alt="${drink}" class="w-64 mx-auto mb-4"><div>${recipe.ingredients}</div>`;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.classList.add('hidden');
}
