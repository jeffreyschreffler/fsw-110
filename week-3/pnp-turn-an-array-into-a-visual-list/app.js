
//create divs
let createDivMain = document.createElement('div');
document.body.append(createDivMain);

//set main-div class
createDivMain.setAttribute('class','div-main');

//create single h1 element
let createH1 = document.createElement('h1');
createDivMain.append(createH1);
createH1.textContent = "Hello World";

// createDivMain.style.display ='inline-block'
// createDivMain.style.color = 'tomato';
// createDivMain.style.textShadow = '2px 2px red';
// createDivMain.style.margin = '50px 100px';
// createDivMain.style.borderBottom = '2px dashed red';

// create subDiv1

let createSubDiv = document.createElement('div');
document.body.append(createSubDiv);
createSubDiv.setAttribute('class','h1-loop')

// loop to create 10 h1

function greeting(){
    for( i = 0; i <10; i++) {
        let h1 = document.createElement('h1');
        createSubDiv.append(h1)
        h1.textContent ="Hello World"
        createDivMain.style.display ='inline-block'
        createSubDiv.style.color = 'tomato';
        createSubDiv.style.textShadow = '2px 2px red';
        createSubDiv.style.margin = '50px 100px';
       
    }
}

greeting()

//sub div 1

let createSubDiv1 = document.createElement('div');
document.body.append(createSubDiv1);
createSubDiv1.setAttribute('class','array-list');

// create ul

let list = document.createElement('ul');
createSubDiv1.append(list);

//array

const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];

function nameList() {
    for (let i =0; i < names.length; i++) {
        let item = document.createElement('li');
        list.append(item);
        item.textContent = names[i]
        item.style.fontSize = "30px";
        
    }
}

nameList()