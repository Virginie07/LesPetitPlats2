var searchHistoryTab = [];
var tabResult = [];


function searchFunction(pWord){
    var start = new Date();

    if (pWord.length < 3) {
        tabResult = recetteTab;
    }
    else{

        referenceTab = [];  
        var wordTabSplit = pWord.split('+');
        console.log(wordTabSplit);
        var pWordOcc = findOccurence(pWord);

        if (pWordOcc >= 0) {  
            // recuperation de la searchSequence correspondant a l'index trouvé dans searchHistoryTab
            var selectedSearchSequence = searchHistoryTab[pWordOcc];
            tabResult = selectedSearchSequence.aSearchResult; 
        }        
        else{

            myWordSearch(wordTabSplit);
         
            var historySequence = searchSequenceFactory(pWord, tabResult);
            searchHistoryTab.push(historySequence);
        }
    }               
     
    afficheResult(tabResult);
    recupTag (); 
    addHtmlTotalSearch(tabResult);  

    var end = new Date();
    var time = end - start

    addHtmlTimeSearch(time)
}

function myWordSearch(pWordList){ 
    var referenceTab = recetteTab;
    for (let index = 0; index < pWordList.length; index++) {
        tabResult = [];
        for (let i = 0; i < referenceTab.length; i++) {
            var recetteResult = referenceTab[i].searchWord(pWordList[index]);
         
            if (recetteResult === true ) {                 
            tabResult.push (referenceTab[i]);       
            }             
        }
        referenceTab = tabResult;
        console.log(tabResult);
    }  
}


function addHtmlTimeSearch(time){
    const totalSearch = document.getElementsByClassName('totalSearch');

    const totalSearchTime = document.createElement('p');   
    totalSearchTime.setAttribute('class','totalSearch__time')
    totalSearchTime.innerHTML = ('( ' + time + 'ms )');
    totalSearch[0].appendChild(totalSearchTime);
}


function findOccurence (pWord){
    // fonction qui doit detecter les doublons sur certains attributs dans les objets searchHistoryTab
    // est ce que searchSequence.aWord == pWord 
    // dans ce cas return index

    for (let index = 0; index < searchHistoryTab.length; index++) {       
        if (searchHistoryTab[index].aWord == pWord) {
            return index
        }
    }
    return -1 
}

function recupTag (){
    var actuTag = [];
    
    for (let index = 0; index < tabResult.length; index++) {
        var recetteIng = tabResult[index].aIngredient;
     
        for (let i = 0; i < recetteIng.length; i++) {
            const recetteBisIng = recetteIng[i].ingredient;    
            actuTag.push(recetteBisIng);   
        }
    }

    var filteredActuTag = actuTag.filter(function(element, position){
        return actuTag.indexOf(element) == position;
    })

    affichageMenuTag(filteredActuTag, 'Ing');    
}