const arrGroceryList = ['pizza', 'birra', 'pomodori', 'caffè',];
const eleGroceryLi = document.querySelector('.li-list');
const olList = document.querySelector('#ol-list');


//stampare la lista precompilata
let i = 0;
while (i < arrGroceryList.length) {
    console.log(arrGroceryList[i]);
    olList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;

    // prendo col prompt e pusho gli items nell'array (precompilata) fino a comando vuoto
    let item
    item = prompt('inserisci qualcosa alla lista');
    while (item != '') {
        if (!arrGroceryList[arrGroceryList.length - 1]) {
         arrGroceryList.pop(); }   

        arrGroceryList.push(item);
        item = prompt('inserisci qualcosa alla lista');
    }
    console.log(arrGroceryList[i]);
    olList.innerHTML += `<li>${arrGroceryList[i]}</li>`;
    i++;
    
}
    