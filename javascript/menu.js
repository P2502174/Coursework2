// Hide and show categoriesb by clicking button which is in header

const menu = document.getElementById('menu');
const categories = document.getElementById('categories');
const close = document.getElementById('close');

menu.addEventListener('click', () => {
  categories.style.display = 'flex';
});

close.addEventListener('click', () => {
  categories.style.display = 'none';
});
