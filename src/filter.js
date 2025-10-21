'use strict';

const filterBtns = document.querySelector('.main__filter');

function updateVisibility(todoStatus) {
  const item = document.querySelectorAll('.item__row');
  item.forEach((li) => (li.style.display = 'none'));

  todoStatus.forEach((todo) => {
    const li = document.querySelector(`li[data-id="${todo.id}"]`);
    li.style.display = 'flex';
  });
}

function onFilter(filter) {
  let todoStatus;
  switch (filter) {
    case 'active':
      todoStatus = todos.filter((todo) => todo.completed === false);
      break;
    case 'completed':
      todoStatus = todos.filter((todo) => todo.completed === true);
      break;
    case 'all':
      todoStatus = todos;
      break;
  }

  updateVisibility(todoStatus);
}

function handleActive(target) {
  const active = document.querySelector('.item--selected');
  active.classList.remove('item--selected');
  target.parentElement.classList.add('item--selected');
}
filterBtns.addEventListener('click', (e) => {
  const filter = e.target.dataset.category;
  if (!filter) return;

  handleActive(e.target);
  onFilter(filter);
});
