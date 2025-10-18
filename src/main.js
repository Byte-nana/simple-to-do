//Function
//0. Store items 👍
//1. Add items 👍
//2. Delete items 👍
//3. Toggle checkbox
//4. Filter items 👍

//0. Sotre items (localStorage)
//3. sotre new updated data whenever data changed: input.value, completed, deleted
//4. render data

const form = document.querySelector('.footer__form');
const input = document.querySelector('#form__input');
const ul = document.querySelector('.main__items');
const filterBtn = document.querySelector('.main__filter');

let todos;
try {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
} catch {
  todos = [];
}
renderTodos();

// Add items
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let text = input.value.trim();
  let id = self.crypto.randomUUID();

  if (!text) {
    input.value = '';
    input.focus();
    return;
  }

  const newTodo = {
    id,
    text,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos();

  createItems(newTodo);

  input.value = '';
  input.focus();
  ul.scrollTop = ul.scrollHeight;
});
// Delete items
ul.addEventListener('click', (e) => {
  let data = e.target.dataset.id;
  if (!data) return;
  const li = document.querySelector(`li[data-id="${data}"]`);
  li.remove();

  todos = todos.filter((todo) => todo.id != data);
  saveTodos();
});
//Toggle items
ul.addEventListener('change', (e) => {
  let id = e.target.dataset.checkbox;
  if (!id) return;

  let todo = todos.find((todo) => todo.id === id);
  todo.completed = e.target.checked;
  saveTodos();
});
// filter
filterBtn.addEventListener('click', (e) => {
  const filter = e.target.dataset.category;

  if (!filter) return;
  filterItems(filter);
});

// function
// save
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// create
function createItems(todo) {
  const li = document.createElement('li');
  li.setAttribute('class', 'item__row');
  li.setAttribute('data-id', todo.id);
  li.setAttribute('data-status', 'active');

  li.innerHTML = `
    <label class="item__label">
      <input class="item__checkbox" type="checkbox" ${
        todo.completed ? 'checked' : ''
      } data-checkbox="${todo.id}"/>
      <span class="item__text">${todo.text}</span>
    </label>
    <button class="item__btn" type="button" aria-label="button for deleting the to do list">
      <i class="fa-solid fa-trash" data-id="${todo.id}"></i>
    </button>
  `;
  setDataset(li);
  ul.append(li);
}

// render
function renderTodos() {
  todos.forEach((todo) => createItems(todo));
}
// setDataset
function setDataset(li) {
  const checkbox = li.querySelector('.item__checkbox');
  checkbox.addEventListener('change', () => {
    li.setAttribute('data-status', checkbox.checked ? 'completed' : 'active');
  });
}
// filter
function filterItems(filter) {
  const items = document.querySelectorAll('.item__row');
  items.forEach((item) => {
    if (filter === 'all' || item.dataset.status === filter) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}
