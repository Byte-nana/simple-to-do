'use strict';

function onChecked(target) {
  let id = target.dataset.check;
  if (!id) return;

  const checkedTodo = todos.find((todo) => todo.id === id);
  checkedTodo.completed = target.checked;
}

items.addEventListener('change', (e) => {
  onChecked(e.target);
  saveTodos();
});
