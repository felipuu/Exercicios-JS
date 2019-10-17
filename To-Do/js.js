var ListElement = document.querySelector('#app ul');
var InputElement = document.querySelector('#app input');
var ButtonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos() {
    ListElement.innerHTML = '';

    for(todo of todos){
        

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var LinkElement = document.createElement('a');
        LinkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo);
        LinkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        var LinkText = document.createTextNode('Excluir');
        LinkElement.appendChild(LinkText);

        todoElement.appendChild(todoText);
        ListElement.appendChild(todoElement);
        ListElement.appendChild(LinkElement);
    }
}

renderTodos();

function addTodo(){
    
    var todoText = InputElement.value;

    todos.push(todoText);
    InputElement.value = ' ';
    renderTodos();
    saveToStorage();
}

ButtonElement.onclick = addTodo;


function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos();
    saveToStorage();
}



function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}