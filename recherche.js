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

    // console.log(actuTag);
    // console.log(filteredActuTag);
    
}






// function searchFunction(pWord){
//     // parcourir recetteTab
//     // pour chaque index du tableau (chaque ficheRecette) on se sert de la methode searchWord pour verifier
//     // si la fiche recette contient le mot on l'affiche sur la console

//     // 1: si 3 caract entrés ou + la recherche se lance
//     // 2: si strictement = a 3 caracteres, tab de reference soit tabResult = recetteTab
//     // 3: on cherche dans le tab de reference (tabResult) et on range dans un tab intermediaire
//     // 4: tabResult = tab intermediaire

    
//     if (pWord.length >= 3) {

//         tabResult = [];

//         // on regarde si searchSequence existe deja dans searchHistoryTab et si oui on l'utilise pour le resultat de   recherche
    
//         var pWordOcc = findOccurence(pWord);

//         if (pWordOcc == -1) {

//             for (let index = 0; index < recetteTab.length; index++) {
//                 var recetteResult = recetteTab[index].searchWord(pWord);
        
//                 if (recetteResult === true ) {                 
//                     tabResult.push (recetteTab[index])          
//                 }             
//             }

//             var historySequence = searchSequenceFactory(pWord, tabResult);
//             searchHistoryTab.push(historySequence);
//             console.log('test du if');
//             }
//         else{
//                 // recuperation de la searchSequence correspondant a l'index trouvé dans searchHistoryTab
//                 var selectedSearchSequence = searchHistoryTab[pWordOcc];
//                 tabResult = selectedSearchSequence.aSearchResult;
//                 console.log('test du else');
//             }
//     }

//     afficheResult(tabResult);
//     recupTag ();
    
//     // console.log(tabResult);
//     // console.log(searchHistoryTab);
    
// }





// function searchFunction(pWord, pTabToSearch, pHistoricSearch){
//     var pWordOcc = -1;
//     if (pWord.length >= 3) {
//         tabResult = [];

//         // on utilise findOccurrence si le booleen est true
//         if (pHistoricSearch == true) {
//             pWordOcc = findOccurence(pWord); 
//             // recuperation de la searchSequence correspondant a l'index trouvé dans searchHistoryTab
//             console.log(pWordOcc);
//             if (pWordOcc >= 0) {
//                 var selectedSearchSequence = searchHistoryTab[pWordOcc];
//                 tabResult = selectedSearchSequence.aSearchResult;
//             }           
//         }
        
//         if (pWordOcc == -1) {
//             for (let index = 0; index < pTabToSearch.length; index++) {
//                     var recetteResult = pTabToSearch[index].searchWord(pWord);
            
//                 if (recetteResult === true ) {                 
//                         tabResult.push (pTabToSearch[index])          
//                     }             
//             }
//             var historySequence = searchSequenceFactory(pWord, tabResult);
//             searchHistoryTab.push(historySequence);
//             console.log('test du if');
//         }
//     }

//     afficheResult(tabResult);
//     recupTag ();
// }











