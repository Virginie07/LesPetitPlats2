// MENU DEROULANT.................................................
  
const contenuIngTag = document.getElementsByClassName('menu__tag--contenuIng');
const contenuAppTag = document.getElementsByClassName('menu__tag--contenuApp');
const contenuUstTag = document.getElementsByClassName('menu__tag--contenuUst');
const contenuTag = document.getElementsByClassName('menu__tag--contenu');

const chevronIng = document.querySelector(".chevronIng");
const chevronApp = document.querySelector(".chevronApp");
const chevronUst = document.querySelector(".chevronUst");

// Evenements au click pour ouvrir les menus tag 


// chevronApp.addEventListener("click", menuTagAppOpen);
// chevronUst.addEventListener("click", menuTagUstOpen);

 
// Fonction pour ouvrir les menus tag

// function menuTagIngOpen(){
//     contenuIngTag[0].style.display = "block";  
//     contenuIngTag[0].style.display = "flex";  
// }

// function menuTagAppOpen(){
//     contenuAppTag[0].style.display = "block";  
//     contenuAppTag[0].style.display = "flex";  
// }

// function menuTagUstOpen(){
//     contenuUstTag[0].style.display = "block"; 
//     contenuUstTag[0].style.display = "flex"; 
// }

chevronIng.addEventListener("click", chevron);

var nbClick = 0;

function chevron() {
    nbClick +1
    var myModulo = nbClick%2
    if(myModulo == 0){
        contenuTag[0].style.display = "block";
        contenuIngTag[0].style.display = "flex";
    }

    if (myModulo != 0) {
        contenuTag[0].style.display = "none";
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


