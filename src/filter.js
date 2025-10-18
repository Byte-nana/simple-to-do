'use strict';

// 분류하기
// 버튼 그룹 가져오기 -> 이벤트 리스너 등록
// active: checked = '', completed = false / completed: checked=checked, completed = true
// active

const categories = document.querySelector('.main__filter');

categories.addEventListener('click', (e) => {
  const filter = e.target.dataset.category;
  if (filter == null) return;
  filterTodo(filter);
});

function filterTodo(filter) {
  todos.forEach((todo) => {
    const li = document.querySelector(`li[data-id=${todo.id}]`);
    if (!li) return;
    const show =
      filter === 'all' ||
      (filter === 'active' && !todo.completed) ||
      (filter === 'completed' && todo.completed);

    li.style.display = show ? 'flex' : 'none';
  });
}
