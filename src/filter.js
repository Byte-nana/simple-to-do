'use strict';

//All button -> 전체 다 보여줌
//Active -> checked 안된 아이템 (completed: false)
//Completed -> checked된 아이템 (complted: true)

//completed가 true이면 안보여주기 completed가 false이면 보여주기

const filterBtns = document.querySelector('.main__filter');

filterBtns.addEventListener('click', (e) => {
  const li = document.querySelectorAll('.item__row');
  li.forEach((li) => (li.style.display = 'none'));

  const filter = e.target.dataset.category;
  if (filter === 'active') {
    let activeTodos = todos.filter((todo) => todo.completed === false);
    activeTodos.forEach((todo) => {
      const activeList = document.querySelectorAll(`li[data-id="${todo.id}"]`);
      activeList.forEach((li) => (li.style.display = 'flex'));
    });
  } else if (filter === 'completed') {
    let completedTodos = todos.filter((todo) => todo.completed === true);
    completedTodos.forEach((todo) => {
      const completedList = document.querySelectorAll(
        `li[data-id="${todo.id}"]`
      );
      completedList.forEach((li) => (li.style.display = 'flex'));
    });
  } else {
    li.forEach((li) => (li.style.display = 'flex'));
  }
});
