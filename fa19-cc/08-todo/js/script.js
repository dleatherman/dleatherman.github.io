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
   displayTodos();
}

todoForm.addEventListener('submit', function(e) {
   e.preventDefault();
   /*
      .push adds an element to an array, we create an object that looks like this:
      {
         title: 'todo',
         complete: 'false
      }
      and add it to the todo array
   */
   todos.push({
      title: e.target[0].value,
      complete: false
   });
   // we need to reset the value for the input
   e.target[0].value = '';
   // store to localStorage
   localStorage.setItem('todos', JSON.stringify(todos));
   displayTodos();
});

clear__todos.addEventListener('click', function(e) {
   // keeps the button from doing something we don't want it to do
   e.preventDefault();
   // reset local variable to empty
   todos = [];
   // overwrite whatever was saved with the empty array
   localStorage.setItem('todos', JSON.stringify(todos));
   // re-render the list
   displayTodos();
});

// primary function for getting and showing the todos from localStorage
function displayTodos() {
   // clear because we're going to rewrite the list every time the function is called
   todoList.innerHTML = null;
   // get todos from localStorage
   todos = JSON.parse(localStorage.getItem('todos'));
   // forloop goes over each item in an array and access it via its index i.e. todos[i]
   for (let i = 0; i < todos.length; i++) {
      todoList.innerHTML += `<li class="${todos[i].complete ? 'complete' : 'incomplete'}">${todos[i].title}</li>`;
   }
}