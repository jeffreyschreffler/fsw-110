


let heading = document.createElement('h1')
heading.textContent = 'Welcome to my JS site';
document.body.appendChild(heading)

let newP = document.createElement('p');
newP.textContent = 'All of this was created with Javascript';
document.body.appendChild(newP)

let ol = document.createElement('ol');
let items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']

items.forEach(function (items) {
    let li = document.createElement('li');
    li.textContent = items;
    ol.appendChild(li);
})

document.body.appendChild(ol);

