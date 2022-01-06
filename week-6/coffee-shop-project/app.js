// get input 

let coffeeInput = document.getElementById('coffee-input');

let teaInput = document.getElementById('tea-input');

let bagelInput = document.getElementById('bagel-input');

//get display element

let displayTotal = document.getElementById('checkout-total-amount');

let btn = document.querySelector("#total-btn");

// total items combine

function totalItems() {
    let a = parseInt(coffeeInput.value * 2 );
    let b = parseInt(teaInput.value * 2);
    let c = parseInt(bagelInput.value * 4);
    let combineTotal = a + b + c;
    return combineTotal;
}


//event listener

btn.addEventListener('click', function() {
    displayTotal.innerHTML = `$${totalItems()}`
})
