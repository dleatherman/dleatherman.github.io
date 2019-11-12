'use strict';

// empty array to store our todos
let todos;

const todoForm = document.getElementById('todo__form');
const todoList = document.getElementById('todo__list');
const clearBtn = document.getElementById('clear__todos');

// if we can't find todos, create an empty array of todos
if (!localStorage.getItem('todos')) {
   todos = [];
} else {
   // get todos from localStorage
   todos = JSON.parse(localStorage.getItem('todos'));
   displayTodos();
}

todoForm.addEventListener('submit', function(e) {
   e.preventDefault();
   todos.push({
      title: e.target[0].value,
      complete: false
   });
   e.target[0].value = '';
   localStorage.setItem('todos', JSON.stringify(todos));
   todoList.innerHTML = null;
   displayTodos();
});

clear__todos.addEventListener('click', function(e) {
   e.preventDefault();
   localStorage.setItem('todos', []);
   todos = [];
   todoList.innerHTML = null;
   displayTodos();
});

function displayTodos() {
   for (let i = 0; i < todos.length; i++) {
      todoList.innerHTML += `<li class="${todos[i].complete ? 'complete' : 'incomplete'}">${todos[i].title}</li>`;
   }
}