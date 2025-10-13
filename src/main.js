'use strict';

//add items

const form = document.querySelector('.footer__form');
const ul = document.querySelector('.main__items');
const input = document.querySelector('#form__input');

let id = 0;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let text = input.value.trim();

  if (text == '') {
    input.value = '';
    return;
  }
  createItem(text);
  id++;

  input.value = '';
});

function createItem(text) {
  const li = document.createElement('li');
  li.setAttribute('class', 'item__row');
  li.setAttribute('data-id', id);
  li.innerHTML = `
    <label for="item__checkbox" class="item__label">
      <input id="item__checkbox" type="checkbox"/>
      <span class="item__text">${text}</span>
    </label>
    <button class="item__btn" type="button" aria-label="button for deleting the to do list">
      <i class="fa-solid fa-trash" data-id="${id}"></i>
    </button>
  `;

  ul.appendChild(li);
}
