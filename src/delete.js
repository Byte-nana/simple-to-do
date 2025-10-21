'use strict';

function onDelete(target) {
  let id = target.dataset.id;
  if (!id) return;

  const deleteItem = document.querySelector(`li[data-id="${id}"]`);
  deleteItem.remove();
  todos = todos.filter((todo) => todo.id != id);
}

items.addEventListener('click', (e) => {
  onDelete(e.target);
  saveTodos();
});
