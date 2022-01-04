

// get square

let square = document.querySelector('#square');

//reset square

let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', function(){
    square.style.backgroundColor ='white';
})

// black on load

let onLoad = window.addEventListener('load', function() {
    square.style.backgroundColor = 'black';
});

// green mouse hover

let greenOnHover = square.addEventListener('mouseover', function(){
    square.style.backgroundColor = 'green';
})

// yellow mouse button held 

let mouseBtn = square.addEventListener('mousedown', function(){
    square.style.backgroundColor = 'yellow';
})

// blue mouse button let go

let mouseRelease = square.addEventListener('mouseup', function(){
    square.style.backgroundColor ='blue';
})

// red double click

let doubleClick = square.addEventListener('dblclick', function(){
    square.style.backgroundColor = 'red';
})

// purple scrolling 

let scroll = document.addEventListener('wheel', function(){
    square.style.backgroundColor = 'purple';
})

//keydown

let black = document.addEventListener('keydown', function(key){
    if( key.which === 71 ) {
        square.style.backgroundColor ='green';
    } else if( key.which === 89 ) {
        square.style.backgroundColor = 'yellow';
    } else if(key.which === 66 ) {
        square.style.backgroundColor = 'blue';
    } else if( key.which === 82 ) {
        square.style.backgroundColor = 'red';
    } else if( key.which === 80 ) {
        square.style.backgroundColor = 'purple';
    }
})