// Создаем перем, в кою полоэжим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем перем, в кою полоэжим  меню
let menu = document.querySelector('.sidebar');
// отслеживаем клики по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function(event){
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // Вешаем класс на меню, когда кликнули по кнопке меню
  menu.classList.toggle('visible');
})