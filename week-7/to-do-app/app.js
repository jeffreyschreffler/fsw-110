
// get elements

//title input

let inputTitle = document.querySelector('#title-input');

//list item input

let inputListItem = document.querySelector('#list-items-input');

// class list

let todoList = document.querySelector('.todo-list')

//add button 

let addBtn = document.querySelector('#add-btn');


//section element for list items

let listSection = document.querySelector('.list-items-section');

//======== event listeners ==========

addBtn.addEventListener('click', function (e){
    e.preventDefault();
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    let newTodo = document.createElement('li');
    newTodo.innerText =  `${inputTitle.value} - ${inputListItem.value}`
    inputTitle.value = '';
    inputListItem.value = '';
    newTodo.classList.add('todo-item');
    todoDiv.append(newTodo);
    //delete
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.classList.add('delete-btn');
    todoDiv.append(deleteBtn);
    todoList.append(todoDiv);
} );

todoList.addEventListener('click', function(e){
    let item = e.target;
    if (item.classList[0] === 'delete-btn') {
        let todo = item.parentElement;
        todo.remove()
    }
})

