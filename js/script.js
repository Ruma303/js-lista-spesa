const arrGroceryList = ['carne', 'pesce', 'vino'];
const eleGroceryLi = document.querySelector('#grocery-list');
const inputText = document.querySelector('#input');
const sendButton = document.querySelector('.send');

sendButton.addEventListener('click', function (spesa) {
        spesa.preventDefault();
})


let i = 0;
while (i < arrGroceryList.length) {
        //print
        eleGroceryLi.innerHTML += `<li>${arrGroceryList[i]}</li>`; 
        console.log(arrGroceryList[i]);
        i++;
}
