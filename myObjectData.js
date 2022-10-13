class myRecette{
    constructor(pId, pName, pServings, pIngredients, pTime, pDescription, pAppliance, pUstensils){
        this.aId = pId
        this.aName = pName.toLowerCase()
        this.aServings = pServings
        this.aIngredient = pIngredients
        this.aTime = pTime
        this.aDescription = pDescription.toLowerCase()
        this.aAppliance = pAppliance.toLowerCase()
        this.aUstensils = pUstensils
    }
    
    searchWord(pWord){
        pWord = pWord.toLowerCase();
        
        if(this.aName.indexOf(pWord) > -1){
            return true
        }

        if(this.aDescription.indexOf(pWord) > -1){
            return true
        }

        if(this.aAppliance.indexOf(pWord) > -1){
            return true
        }

        if(this.aUstensils.indexOf(pWord) > -1){
            return true
        }

        for (let index = 0; index < this.aIngredient.length; index++) {
            if(this.aIngredient[index].ingredient.indexOf(pWord) > -1){
                return true
            }
        }

        return false
    }
    
    getFormatedDescription(){
        var chaine = this.aDescription;

        if (chaine.length > 175) {
            return chaine.slice(0, 175) + '...';
        }

        else{
            return chaine;
        }
    }


    addTagMenus(){
        // la methode addTagMenus prends les noms des ingredients dans lobjet et les ajoute aux tableaux ingredientsTab.appareilsTab.ustensilsTab

        for (let index = 0; index < this.aIngredient.length; index++) {
            ingredientsTab.push(this.aIngredient[index].ingredient)            
        }

        appareilsTab.push(this.aAppliance)

        for (let index = 0; index < this.aUstensils.length; index++) {
            ustensilsTab.push(this.aUstensils[index])
        }
    }

    addHtmlCode(){

    var recettes = document.getElementsByClassName('recettes');

    var recetteItem = document.createElement('div');   
    recetteItem.setAttribute('class','recettes__item');
    recettes[0].appendChild(recetteItem);

    // div recette item Photo
    const recettes__itemPhoto = document.createElement('div');   
    recettes__itemPhoto.setAttribute('class','recettes__item--photo');
    recetteItem.appendChild(recettes__itemPhoto);

    // div recette item Photo Illu
    const recettes__itemIllu = document.createElement('img');   
    recettes__itemIllu.setAttribute('class','recettes__item--illu');
    recettes__itemPhoto.appendChild(recettes__itemIllu);

    // div recette item composants
    const recettes__itemComposants = document.createElement('div');   
    recettes__itemComposants.setAttribute('class','recettes__item--composants');
    recetteItem.appendChild(recettes__itemComposants);

    // div recette item composants Name
    const recettes__itemComposantsName = document.createElement('div');   
    recettes__itemComposantsName.setAttribute('class','recettes__item--composantsName');
    recettes__itemComposants.appendChild(recettes__itemComposantsName);

    // div recettes item composants Name Para
    const recettes__itemComposantsNamePara = document.createElement('p');   
    recettes__itemComposantsNamePara.setAttribute('class','recettes__item--composantsNamePara')
    recettes__itemComposantsNamePara.innerHTML = (this.aName);
    recettes__itemComposantsName.appendChild(recettes__itemComposantsNamePara);

    // div recette item composants Time
    const recettes__itemComposantsTime = document.createElement('div');   
    recettes__itemComposantsTime.setAttribute('class','recettes__item--composantsTime')
    recettes__itemComposants.appendChild(recettes__itemComposantsTime);

    // div recette item composants Horloge
    const recettes__itemComposantsHorloge= document.createElement('div');   
    recettes__itemComposantsHorloge.setAttribute('class','recettes__item--composantsHorloge')
    recettes__itemComposantsTime.appendChild(recettes__itemComposantsHorloge);


    // div recette item composants Horloge Icone
    const recettes__itemComposantsHorlogeIcone = document.createElement('img');   
    recettes__itemComposantsHorlogeIcone.setAttribute('class','recettes__item--composantsHorlogeIcone');
    recettes__itemComposantsHorlogeIcone.setAttribute('src',`./images/Time.png`);
    recettes__itemComposantsHorloge.appendChild(recettes__itemComposantsHorlogeIcone);


    // div recette item composants Horloge Para
    const recettes__itemComposantsHorlogePara = document.createElement('p');   
    recettes__itemComposantsHorlogePara.setAttribute('class','recettes__item--composantsHorlogePara')
    recettes__itemComposantsHorlogePara.innerHTML = (this.aTime + 'mn');
    recettes__itemComposantsHorloge.appendChild(recettes__itemComposantsHorlogePara);

    // div recette item Composants Liste
    // code a executer pour chaque ingredient
    const recettes__itemComposantsListe = document.createElement('div');   
    recettes__itemComposantsListe.setAttribute('class','recettes__item--composantsListe')
    var totalIngredients = '';
    for (let index = 0; index < this.aIngredient.length; index++) {
        totalIngredients = totalIngredients + this.aIngredient[index].ingredient
        
        if(typeof this.aIngredient[index].quantity !== 'undefined'){
            totalIngredients = totalIngredients + ':' + ' ' + this.aIngredient[index].quantity
        }

        if(typeof this.aIngredient[index].unit !== 'undefined'){
            totalIngredients = totalIngredients + ' ' + this.aIngredient[index].unit.replace('grammes', 'g')
        }
        
        totalIngredients = totalIngredients + '<br>';
    }
    recettes__itemComposantsListe.innerHTML = (totalIngredients);
    recettes__itemComposants.appendChild(recettes__itemComposantsListe);

    // div recette item composant Method
    const recettes__itemComposantsMethod = document.createElement('div');   
    recettes__itemComposantsMethod.setAttribute('class','recettes__item--composantsMethod')
    recettes__itemComposants.appendChild(recettes__itemComposantsMethod);

    // div recette item composant Method Para
    const recettes__itemComposantsMethodPara = document.createElement('p');   
    recettes__itemComposantsMethodPara.setAttribute('class','recettes__item--composantsMethodPara')
    recettes__itemComposantsMethodPara.innerHTML = (this.getFormatedDescription());
    recettes__itemComposantsMethod.appendChild(recettes__itemComposantsMethodPara);
    }
}

function recetteFactory(pRecipeToObj){
    var ficheRecette = new myRecette (pRecipeToObj.id, pRecipeToObj.name, pRecipeToObj.servings, pRecipeToObj.ingredients, pRecipeToObj.time, pRecipeToObj.description, pRecipeToObj.appliance, pRecipeToObj.ustensils);

    return ficheRecette;
}


class searchSequence{
    constructor(pWord, pSearchResult){
        this.aWord = pWord
        this.aSearchResult = pSearchResult
    }
}


function searchSequenceFactory(pWord, tabResult){

    // Generation des objets searchSequence       
    var historySequence = new searchSequence (pWord, tabResult)
            
    return historySequence;
}


var recetteTab = [];

var ingredientsTab = [];

var appareilsTab = [];

var ustensilsTab = [];

var currentWordSearchTab =[];


// Fonction qui permet de generer des objets recette puis de les afficher via la methode de l'objet myRecette

function recetteTabFactory(){

    // Generation des objets recette

    for (let index = 0; index < recipes.length; index++) {
        var ficheRecette = recetteFactory(recipes[index]);
        
        // Stockage des objets recette        
        recetteTab.push(ficheRecette);

        // affichage de la fiche recette a partir de la methode instanciée dans l'objet myRecette
        ficheRecette.addHtmlCode();      
    }
}
recetteTabFactory();


// Fonction qui parcourt le tableau recetteTab et appelle la methode addTagMenus

function tagFactory() {     
    for (let index = 0; index < recetteTab.length; index++) {
        recetteTab[index].addTagMenus();        
    }
}
tagFactory();


var filteredIngredientsTab = ingredientsTab.filter(function(element, position){
    return ingredientsTab.indexOf(element) == position;
})

var filteredAppliancesTab = appareilsTab.filter(function(element, position){
    return appareilsTab.indexOf(element) == position;
})

var filteredUstensilsTab = ustensilsTab.filter(function(element, position){
    return ustensilsTab.indexOf(element) == position;
})

// tableau servant au remplissage de la div resultat
var filteredCurrentWordSearchTab = [];

// variable associant mot de barre de recherche et mot cliqué sous forme de chaine de caractere
var wordToUse = '';

// Fonction d'affichage des div sous les menus tags

function affichageTag() {
    // menu tag Ing
    affichageMenuTag(filteredIngredientsTab, 'Ing');

    // menu tag App
    affichageMenuTag(filteredAppliancesTab, 'App');

    // div menu tag Ust
    affichageMenuTag(filteredUstensilsTab, 'Ust');
}

affichageTag();

// concernTab = tableau parcouru, menu__tagSpec = ing, ust ou app

function affichageMenuTag(concernTab, menu__tagSpec){
    var menu__tag = document.getElementsByClassName('menu__tag--contenu' + menu__tagSpec);
    menu__tag[0].innerHTML = '';
    
    for (let index = 0; index < concernTab.length; index++) {

        const tagPara = document.createElement('p');   
        tagPara.setAttribute('class','menu__tag--contenu' + menu__tagSpec + 'Para');
        
        tagPara.addEventListener("click", () => { 
            selectionOpen(concernTab[index]);
            menuTagClose(menu__tagSpec);
        });

        tagPara.innerHTML = concernTab[index];
        menu__tag[0].appendChild(tagPara);
    }
}



function typeTag(pWord){
    for (let index = 0; index < ingredientsTab.length; index++) {
        if (pWord == ingredientsTab[index]) {
            return ('resultat__itemIng')
        }    
    }

    for (let index = 0; index < appareilsTab.length; index++) {
        if (pWord == appareilsTab[index]) {
            return ('resultat__itemApp')
        }    
    }

    for (let index = 0; index < ustensilsTab.length; index++) {
        if (pWord == ustensilsTab[index]) {
            return ('resultat__itemUst')
        }    
    }
}

// Fonction qui permet l'affichage des div de selection des menus tags + evenement de fermeture d'une div

function afficheCurrentTagTab(){
    // Appel de la div principale
    const resultat = document.getElementsByClassName("resultat");

    // vidage div avant de reafficher la tableau
    resultat[0].innerHTML = '';

    for (let index = 0; index < filteredCurrentWordSearchTab.length; index++) {

        // div itemSelection
        const itemSelection = document.createElement('div');   
        itemSelection.setAttribute('class', typeTag(filteredCurrentWordSearchTab[index]));

        // div texte
        const itemSelectionTexte = document.createElement('div');   
        itemSelectionTexte.setAttribute('class','resultat__texte')
        itemSelectionTexte.innerHTML = (filteredCurrentWordSearchTab[index]);
        itemSelection.appendChild(itemSelectionTexte);

        // div icone
        var globalSearch = '';
        const itemSelectionIcone = document.createElement('i');   
        itemSelectionIcone.setAttribute('class','fas fa-times-circle resultat__croix');
        itemSelectionIcone.addEventListener("click", () => { 
            selectionClose(itemSelection);
            delSearchEntry(filteredCurrentWordSearchTab[index]);
            filteredCurrentWordSearchTab = currentWordSearchTab.filter(function(element, position){
            return currentWordSearchTab.indexOf(element) == position;
            })
            stringDeleteCurrentTab = stringFunction(filteredCurrentWordSearchTab);
            console.log(stringDeleteCurrentTab);
            if (wordToUse != '') {
                globalSearch = wordToUse + '+' + stringDeleteCurrentTab
            }
            else{
                globalSearch = stringDeleteCurrentTab
            }

            searchFunction(globalSearch)
            console.log(globalSearch);
        });
        itemSelection.appendChild(itemSelectionIcone);
        resultat[0].appendChild(itemSelection);

        itemSelection.style.display = "block"; 
        itemSelection.style.display = "flex";
    }
}
afficheCurrentTagTab();


function stringFunction(tabToString){
    var newTabString = '';

    for (let index = 0; index < tabToString.length; index++) {
        if (index == 0) {
            newTabString = tabToString[index]
        }
        else{
            newTabString = newTabString + '+' + tabToString[index]
        }       
    }
    return newTabString  
}


// Fonction qui permet de supprimer une item du tableau currentWordSearchTab

function delSearchEntry(pEntryToDel){
    var myIndex = currentWordSearchTab.indexOf(pEntryToDel);
    
    if (myIndex !== -1) {
        currentWordSearchTab.splice(myIndex, 1);
    }    
}



function afficheResult(tabData){
    // console.log(tabData);
    var recettes = document.getElementsByClassName('recettes');
    recettes[0].innerHTML = '';
    
    for (let index = 0; index < tabData.length; index++) {
        tabData[index].addHtmlCode();        
    }   
}

function addHtmlTotalSearch(tabNumber){
    const totalSearch = document.getElementsByClassName('totalSearch');
    var totalTab = tabNumber.length;
    totalSearch[0].innerHTML = '';

    const totalSearchRecipes = document.createElement('p');   
    totalSearchRecipes.setAttribute('class','totalSearch__recipes')
    totalSearchRecipes.innerHTML = (totalTab + ' recette(s)');
    totalSearch[0].appendChild(totalSearchRecipes);
}

function noSearchResult(){
    const noResult = document.getElementsByClassName('noResult');

    const noResultPara = document.createElement('p');
    noResultPara.setAttribute('class','noResult__para');
    noResultPara.innerHTML = ('Pas de recette correspondant à votre recherche');
    noResult[0].appendChild(noResultPara);
}











