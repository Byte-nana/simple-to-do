'use strict';

let todos;
try {
  todos = JSON.parse(localStorage.getItem('todos'))
    ? JSON.parse(localStorage.getItem('todos'))
    : [];
} catch {
  todos = [];
}
renderTodos();

//render
function renderTodos() {
  todos.forEach((todo) => {
    const item = createItems(todo);
    items.appendChild(item);
  });
}
//save
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
