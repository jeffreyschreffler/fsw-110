

// buttons

let addBtn = document.querySelector('.equal-add');

addBtn.addEventListener('click', function () {
    let num1 = document.querySelector('.add-num-1').value;
    let num2 = document.querySelector('.add-num-2').value;
    let sum = parseInt(num1) + parseInt(num2);
    let answer = document.querySelector('.output');
    answer.textContent = sum
})

let subBtn = document.querySelector('.equal-sub');

subBtn.addEventListener('click', function () {
    let num1 = document.querySelector('.sub-num-1').value;
    let num2 = document.querySelector('.sub-num-2').value;
    let sum = parseInt(num1) - parseInt(num2);
    let answer = document.querySelector('.output');
    answer.textContent = sum
})

let mulBtn = document.querySelector('.equal-mul');

mulBtn.addEventListener('click', function () {
    let num1 = document.querySelector('.mul-num-1').value;
    let num2 = document.querySelector('.mul-num-2').value;
    let sum = parseInt(num1) * parseInt(num2);
    let answer = document.querySelector('.output');
    answer.textContent = sum
})

let divBtn = document.querySelector('.equal-div');

divBtn.addEventListener('click', function () {
    let num1 = document.querySelector('.div-num-1').value;
    let num2 = document.querySelector('.div-num-2').value;
    let sum = parseInt(num1) / parseInt(num2);
    let answer = document.querySelector('.output');
    answer.textContent = sum
})
