'use strict';

//delete item

ul.addEventListener('click', (e) => {
  let data = e.target.dataset.id;
  if (!data) return;

  const li = document.querySelector(`li[data-id="${data}"]`);
  li.remove();
});
