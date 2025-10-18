'use strict';

// 구현 계획
//데이터 저장하기
//데이터 타입: id, text, checkbox 상태
//2-1. 이를 저장하고 다시 랜더하기

// DOM
const form = document.querySelector('.footer__form');
const input = document.querySelector('#form__input');
const ul = document.querySelector('.main__items');

// 데이터 가져오기
//1. 전에 있던 데이터 불러오기(없으면 빈 배열 반환하기)
let todos = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];
renderTodos();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let text = input.value.trim();

  //ignore empty value
  if (!text) {
    input.value = '';
    input.focus();
    return;
  }

  //1-1. 그리고 화면에 표시하기
  //2. 아이템 저장할 때 객체로 저장하기
  let id = crypto.randomUUID();

  const newTodo = {
    id,
    text,
    completed: false,
  };
  todos.push(newTodo);
  saveTodos();

  createItem(newTodo);

  //initalise input.value
  input.value = '';
  //give focus when hit the button to submit
  input.focus();
});

function createItem(todo) {
  const li = document.createElement('li');
  li.setAttribute('class', 'item__row');
  li.setAttribute('data-id', todo.id);

  li.innerHTML = `
    <label class="item__label">
      <input class="item__checkbox" type="checkbox" ${
        todo.completed ? 'checked' : ''
      } data-check="${todo.id}"/>
      <span class="item__text">${todo.text}</span>
    </label>
    <button class="item__btn" type="button" aria-label="button for deleting the to do list">
      <i class="fa-solid fa-trash" data-id="${todo.id}"></i>
    </button>
  `;

  ul.appendChild(li);
}
// render todos
function renderTodos() {
  todos.forEach((todo) => createItem(todo));
}
// save todos
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
// delte items
ul.addEventListener('click', (e) => {
  let data = e.target.dataset.id;
  if (!data) return;
  const li = document.querySelector(`li[data-id="${data}"]`);
  li.remove();
  todos = todos.filter((todo) => todo.id != data);
  saveTodos();
});
// toggle checkbox
ul.addEventListener('change', (e) => {
  if (!e.target.classList.contains('item__checkbox')) return;

  let data = e.target.dataset.check;
  let checkedTodo = todos.find((todo) => todo.id === data);

  checkedTodo.completed = e.target.checked;
  saveTodos();
  //todos에 있는 complete가져오기 데이터가 일치하는 데이터

  // 내가 누른 버튼 객체 안에 있는 컴플릿이 트루로 바뀐다.
  //버튼 누르기 -> 그 버튼 안에 있는 아이디 가져오기 -> 그 아이디가 속한 객체의 컴플릿을 트루로 바꾸기
});
