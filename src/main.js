'use strict';

//add items

const form = document.querySelector('.footer__form');
const ul = document.querySelector('.main__items');
const input = document.querySelector('#form__input');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let id = todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 0;

todos.forEach((todo) => createItem(todo));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let text = input.value.trim();

  if (text == '') {
    input.value = '';
    return;
  }

  const newTodo = {
    id: id++,
    text,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos();
  createItem(newTodo);

  input.value = '';
});

function createItem(todo) {
  const li = document.createElement('li');
  li.setAttribute('class', 'item__row');
  li.setAttribute('data-id', todo.id);
  li.innerHTML = `
    <label class="item__label">
      <input class="item__checkbox" type="checkbox" ${
        todo.completed ? 'checked' : ''
      }/>
      <span class="item__text">${todo.text}</span>
    </label>
    <button class="item__btn" type="button" aria-label="button for deleting the to do list">
      <i class="fa-solid fa-trash" data-id="${todo.id}"></i>
    </button>
  `;

  ul.appendChild(li);
  ul.scrollTop = ul.scrollHeight;
}
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
//delete item
ul.addEventListener('click', (e) => {
  let data = e.target.dataset.id;
  if (!data) return;

  todos = todos.filter((todo) => todo.id != data);
  saveTodos();

  const li = document.querySelector(`li[data-id="${data}"]`);
  li.remove();
});

// Toggle complete
ul.addEventListener('change', (e) => {
  if (!e.target.classList.contains('item__checkbox')) return;

  const li = e.target.closest('li');
  const id = Number(li.dataset.id);
  const todo = todos.find((t) => t.id === id);

  todo.completed = e.target.checked;
  saveTodos();
});
