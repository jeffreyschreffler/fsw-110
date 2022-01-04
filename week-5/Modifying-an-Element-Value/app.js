

//get 

let nameValue = document.getElementById('name');

let phoneValue =  document.getElementById('phone');

let emailValue = document.getElementById('email');

let btn = document.getElementById('btn');


//label

let nameLabel = document.querySelector('#label-name').textContent;

let phoneLabel = document.querySelector("#label-phone").textContent;

let emailLabel = document.querySelector('#label-email').textContent;


//set 

btn.addEventListener('click', function (e) {
    e.preventDefault();
    alert(`${nameLabel}: ${nameValue.value} \n${phoneLabel}: ${phoneValue.value} \n${emailLabel}: ${emailValue.value}`) + clearEntry();
})

function clearEntry() {
    nameValue.value = '';
    phoneValue.value = '';
    emailValue.value = ' ';
}
