
// nav
let nav = document.createElement('nav');
document.body.append(nav);

//google

let google = document.createElement('a');
google.textContent = 'Google'
google.href = 'https://google.com'
nav.append(google);

//bryan

let bryan = document.createElement('a');
bryan.textContent = "Bryan U";
bryan.href = 'https://bryanuniversity.edu';
nav.append(bryan)

// nav style

bryan.style.margin = '10px';

// w3

let w3 = document.createElement('a');
w3.textContent = 'W3 Schools';
w3.href = 'https://w3schools.com';
nav.append(w3)

//h1

let h1 = document.createElement('h1');
h1.textContent = "Welcome to my page!";
document.body.append(h1);

//p

let para = document.createElement('p');
para.innerText = 'This is my paragraph insterted by JavaScript!';
document.body.append(para);

//list

let list = document.createElement('ul');
document.body.append(list);

// list items

let listItem1 = document.createElement('li');
listItem1.textContent = "Apples";
list.append(listItem1);

let listItem2 = document.createElement('li');
listItem2.textContent = 'Bananas';
list.append(listItem2);

let listItem3 = document.createElement('li');
listItem3.textContent = "Oranges";
list.append(listItem3);

// footer
let footer = document.createElement('footer');
document.body.append(footer);


// p
let contact = document.createElement('p');
contact.textContent = 'message-me@email.com';
footer.append(contact);