// MENU DEROULANT.................................................
const contenuTag = document.getElementsByClassName('menu__tag--contenu');
const recetteTag = document.getElementsByClassName('recettes');

const chevronIng = document.querySelector(".chevronIng");
const chevronApp = document.querySelector(".chevronApp");
const chevronUst = document.querySelector(".chevronUst");

// Evenements au click pour ouvrir les menus tag 

chevronIng.addEventListener("click", () => { 
    chevron(contenuTag[0])
});

chevronApp.addEventListener("click", () => { 
    chevron(contenuTag[1])
});

chevronUst.addEventListener("click", () => { 
    chevron(contenuTag[2])
});

// Fonction pour ouvrir les menus tag


var nbClick = 1;
function chevron(contenuTagToUse) {
    
    nbClick = nbClick +1;
    console.log(nbClick);
    var myModulo = nbClick%2
    if(myModulo == 0){
        contenuTagToUse.style.display = "block";
        contenuTagToUse.style.display = "flex";
        // recetteTag[0].style.marginTop = "-300px";
    }

    if (myModulo != 0) {
        contenuTagToUse.style.display = "none";
        // recetteTag[0].style.marginTop = "";
    }
}
// Fonction pour fermer le menu tag

function menuTagClose(menu__tagSpec){
    if (menu__tagSpec == 'Ing') {
        contenuTag[0].style.display = "none";
        // contenuTag[0].style.position = "absolute";
        // contenuTag[0].style.zIndex = "1";
    }
    if (menu__tagSpec == 'App') {
        contenuTag[1].style.display = "none";
    }
    if (menu__tagSpec == 'Ust') {
        contenuTag[2].style.display = "none";
    }   
}


// Fonction pour ouvrir les items de selection menu Tag

function selectionOpen(pWordSelect){
    currentWordSearchTab.push(pWordSelect);
    filteredCurrentWordSearchTab = currentWordSearchTab.filter(function(element, position){
        return currentWordSearchTab.indexOf(element) == position;
    })

    afficheCurrentTagTab();

    currentTabString = stringFunction(filteredCurrentWordSearchTab);
    console.log(currentTabString);
    
    var globalSearch = '';
    if (wordToUse != '') {
        globalSearch = wordToUse + '+' + currentTabString
    }
    else{
        globalSearch = currentTabString
    }
    
    searchFunction(globalSearch);
    console.log(globalSearch);
}

// Fonction pour fermer les items de selection des tags

function selectionClose(pItemToClose){    
    pItemToClose.style.display = 'none';
}

// Barre de recherche

const selectElement = document.getElementById('searchBarre');

selectElement.addEventListener('input', (event) => {
    wordToUse = event.target.value;
    searchFunction(wordToUse);
    console.log(event.target.value);
});

// Barre de recherche tag

const tagBarreIng = document.getElementById('tagBarreIng');

tagBarreIng.addEventListener('input', (event) => {
    wordToUse = event.target.value;
    searchFunction(wordToUse);
    console.log(event.target.value);
});

const tagBarreApp = document.getElementById('tagBarreApp');

tagBarreApp.addEventListener('input', (event) => {
    wordToUse = event.target.value;
    searchFunction(wordToUse);
    console.log(event.target.value);
});

const tagBarreUst = document.getElementById('tagBarreUst');

tagBarreUst.addEventListener('input', (event) => {
    wordToUse = event.target.value;
    searchFunction(wordToUse);
    console.log(event.target.value);
});


