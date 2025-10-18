'use strict';

// 분류하기
// 버튼 그룹 가져오기 -> 이벤트 리스너 등록
// active: checked = '', completed = false / completed: checked=checked, completed = true
// active

const categories = document.querySelector('.main__filter');
categories.addEventListener('click', (e) => {
  const filter = e.target.dataset.category;
  if (filter == null) return;

  if (filter == 'all') {
    return todos.forEach((todo) => {
      let id = todo.id;
      const li = document.querySelector(`li[data-id="${id}"]`);
      if (todo.completed) {
        li.style.display = 'flex';
      } else {
        li.style.display = 'flex';
      }
    });
  }
  if (filter == 'active') {
    return todos.forEach((todo) => {
      let id = todo.id;
      const li = document.querySelector(`li[data-id="${id}"]`);
      if (todo.completed) {
        li.style.display = 'flex';
      } else {
        li.style.display = 'none';
      }
    });
  }
  if (filter == 'completed') {
    return todos.forEach((todo) => {
      let id = todo.id;
      const li = document.querySelector(`li[data-id="${id}"]`);
      if (!todo.completed) {
        li.style.display = 'flex';
      } else {
        li.style.display = 'none';
      }
    });
  }
});
