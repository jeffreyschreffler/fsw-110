// make the box disapear when the user clicks it

// get box

let box = document.querySelector('.red-box');

//event listeners

box.addEventListener('click', function() {
    box.remove();
})