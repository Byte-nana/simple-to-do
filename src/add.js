'use strict';

// Todo app
// function
// 4. filter (active, completed)

// DOM
const form = document.querySelector('.footer__form');
const input = document.querySelector('#form__input');
const items = document.querySelector('.main__items');

//Add
function onAdd() {
  let text = input.value.trim();
  if (!text) {
    input.value = '';
    input.focus();
    return;
  }
  const newTodo = setData(text);
  const item = createItems(newTodo);
  items.appendChild(item);
  input.value = '';
  input.focus();
}

function setData(text) {
  let id = self.crypto.randomUUID();
  const newTodo = {
    id,
    text,
    completed: false,
  };
  todos.push(newTodo);
  saveTodos();
  return newTodo;
}

function createItems(todo) {
  const item = document.createElement('li');
  item.setAttribute('class', 'item__row');
  item.setAttribute('data-id', todo.id);

  item.innerHTML = `
   <label class="item__label">
      <input class="item__checkbox" type="checkbox" ${
        todo.completed ? 'checked' : ''
      } data-check="${todo.id}"/>
      <span class="item__name">${todo.text}</span>
    </label>
    <button class="item__delete" type="button" aria-label="button for deleting the to do list">
      <i class="fa-solid fa-trash" data-id="${todo.id}"></i>
    </button>
`;

  return item;
}

form.addEventListener('submit', () => {
  onAdd();
});
