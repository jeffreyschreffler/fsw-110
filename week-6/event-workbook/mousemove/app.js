
// get box

let box = document.querySelector('.red-box')

// create h1

let h1 = document.createElement('h1');
box.append(h1);


//event

box.addEventListener('mousemove', function (e) {
    h1.textContent = `X: ${e.clientX} Y: ${e.clientY}`;
})