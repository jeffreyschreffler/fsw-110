

//get labels
let firstNameLabel = document.querySelector('#first-name-label').innerHTML;
let lastNameLabel = document.querySelector('#last-name-label').innerHTML;
let shoppedBeforeLabel = document.querySelector('#shopped-before-label').innerHTML;
let dietRestrictions = document.querySelector('#diet').innerHTML;
let referLabel = document.querySelector('#refer').innerHTML;
let btn = document.querySelector('#btn-submit');

//get inputs

let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let shoppedBefore = document.querySelectorAll('input[name="shopped-before"]:checked');
let shoppedBeforeYes = document.querySelector('#shopped-before-yes');
let shoppedBeforeNo = document.querySelector('#shopped-before-no');
let diet = document.querySelectorAll('input[name=""]:checked');
let dietVegan = document.querySelector('#check-vegan');
let dietVegetarian = document.querySelector('#check-vegetarian');
let dietOther = document.querySelector('#check-other');
let refer = document.querySelector('select');

//listners

btn.addEventListener('click', function() {
    document.querySelectorAll('input')
})


//submit 

let submit = document.querySelector('#question');

submit.addEventListener('submit', function (e) {
    e.preventDefault();
    alert(`${firstNameLabel}: ${firstName.value} \n${lastNameLabel}: ${lastName.value} \n${shoppedBeforeLabel} ${shopped()} \n${dietRestrictions}: ${restrictions()} \n${referLabel} ${refer.value}`);
    
});

//functions

function shopped(){
    if (shoppedBeforeYes.checked === true) {
        return 'Yes'
    } else if (shoppedBeforeNo.checked === true) {
        return 'No'
    }
}

function restrictions() {
    if (dietVegan.checked === true) {
        return 'Vegan';
    } else if (dietVegetarian.checked === true) {
        return 'Vegetarian';
    } else if (dietOther.checked === true) {
        return "Other"
    }
}