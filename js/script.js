// Слайдеры
$(function() {
  $('.order-slider_slider').slick({
    dots: true,
    fade: true,
    responsive: [
      {
        breakpoint: 781,
        settings: {
          arrows: false,
          dots: false
        }
      }
    ]
  })
});

$(function() {
  $('.main-slider').slick({
    dots: true,
    arrows: false,
    speed: 1000,
  })
});

$(function() {
  $('.jewelry-slider').slick({
    dots: true,
    fade: true,
    arrows : false,
  })
});

// Ограничение ввода в input type number
document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener("keypress", (e) => {
    e = e || window.event;
    const charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    const charStr = String.fromCharCode(charCode);
  
    if (!charStr.match(/^[0-9]+$/))
      e.preventDefault();
  })
});

// Установка фиксированного header при scroll Y > 70
const header = document.querySelector('.header');
let scroll = 0

window.addEventListener('scroll', function(e) {
  scroll = window.scrollY;
  if(scroll > 70) {
    header.classList.add('header_fixed')
  } else {
    header.classList.remove('header_fixed')
  }
});

// Открытие и закрытие мобильного меню
const openMobileMenuButton = document.querySelector('.header__button_burger');
const mobileMenu = document.querySelector('.mobile-menu');

openMobileMenuButton.addEventListener('click', function(e) {
  mobileMenu.classList.remove('mobile-menu_invisible');
  document.querySelector('.page').classList.add('page_is-menu-open');
});

mobileMenu.addEventListener('click', function(e) {
  if(e.target.classList.contains('mobile-menu')) {
    mobileMenu.classList.add('mobile-menu_invisible');
    document.querySelector('.page').classList.remove('page_is-menu-open');
  }
});

// Раскрытие и закрытие элементов мобильного меню
let mobileMenuLinks = document.querySelectorAll('.link');

for (i=0; i<mobileMenuLinks.length; i++) {
  let subMenu = mobileMenuLinks[i].nextElementSibling;
  let arrow = mobileMenuLinks[i].lastElementChild;

  mobileMenuLinks[i].addEventListener('click', function() {
    subMenu.classList.toggle('mobile-menu__submenu_visible');
    arrow.classList.toggle('mobile-menu__arrow_menu-open');
  })
};

// Открытие и закрытие выпадающего меню в header
const buttonsOpenBoutique = document.querySelector('.header__menu-item_open-boutique');
const boutiqueMenu = document.querySelector('.header__boutique');

buttonsOpenBoutique.addEventListener('click', function() {
  boutiqueMenu.classList.toggle('header__boutique_visible');
  buttonsOpenBoutique.classList.toggle('header__menu-item_menu-open');
});

const buttonsOpenWeddingJewelery = document.querySelector('.header__menu-item_open-wedding-jewelery');
const weddingJewelerMenu = document.querySelector('.header__jewelery');

buttonsOpenWeddingJewelery.addEventListener('click', function() {
  weddingJewelerMenu.classList.toggle('header__jewelery_visible');
  buttonsOpenWeddingJewelery.classList.toggle('header__menu-item_menu-open');
});

// Закрытие выпадающих меню в header по клику по overlay
document.addEventListener('click', ({target}) => {
  if (!boutiqueMenu.contains(target) && target !== buttonsOpenBoutique) {
    boutiqueMenu.classList.remove('header__boutique_visible');
    buttonsOpenBoutique.classList.remove('header__menu-item_menu-open');
  }
});

document.addEventListener('click', ({target}) => {
  if (!weddingJewelerMenu.contains(target) && target !== buttonsOpenWeddingJewelery) {
    weddingJewelerMenu.classList.remove('header__jewelery_visible');
    buttonsOpenWeddingJewelery.classList.remove('header__menu-item_menu-open');
  }
});

// Открытие и закрытие модального окна с поиском
const openSearchModalWindow = document.querySelector('.header__button_loupe');
const searchModalWindow = document.querySelector('.search-modal-window');

openSearchModalWindow.addEventListener('click', function(e) {
  searchModalWindow.classList.remove('search-modal-window_invisible');
});

searchModalWindow.addEventListener('click', function(e) {
  if(e.target.classList.contains('search-modal-window')) {
    searchModalWindow.classList.add('search-modal-window_invisible');
  }
});

//Выбриаем все выпадающие списки на странице
document.querySelectorAll('.select').forEach(select => {

	let selectCurrent = select.querySelector('.select__current'),
			selectList = select.querySelector('.select__list'),
			selectInput = select.querySelector('.select__input'),
			selectItem = select.querySelectorAll('.select__item');

	//по клику добавляем/удалям класс
	selectCurrent.addEventListener('click', () => {
		selectList.classList.toggle('select__list--show')
    selectCurrent.classList.toggle('select__current_open')
	});

	//обходим элементы списка
	selectItem.forEach(item =>{
	
		//обрабатываем событие клик по элементу
		item.addEventListener('click', ()=>{
			
			//получаем значение из data-атрибута
			let itemValue = item.getAttribute('data-value') 
			
			//получаем содержание элемента (текст)
			let itemText = item.textContent
			
			//присваиваем инпуту ранее полученное значение из data-атрибута
			selectInput.value = itemValue 
			
			//присваиваем текущее значение (текст)
			selectCurrent.textContent = itemText 
			
			//скрываем выпадающий список
			selectListHide() 
		})
	});
	
	// функция закрытия выпадающего списка
	let selectListHide = () => {
		selectList.classList.remove('select__list--show')
    selectCurrent.classList.remove('select__current_open')
	}
	//Закрываем выпадающий сисок, если клик был вне области
	document.addEventListener('mouseup', (e) =>{
    if (!select.contains(e.target))	selectListHide()
  })
});

//Редирект на страницу поиска при отправке формы
document.querySelector('.search-modal-window__form').addEventListener('submit', (e)=> {
  e.preventDefault();
  window.location.href= "search.html";
});

document.querySelector('.mobile-menu__search').addEventListener('submit', (e)=> {
  e.preventDefault();
  window.location.href= "search.html";
});

// Показать, скрыть пароль
function togglePassInput(button, e) {
  const input = e.target.closest("label").querySelector('input');

  if(input.type == "password") {
    input.type = "text";
    button.classList.add("button-show-password_password-shown");
  } else {
    input.type = "password";
    button.classList.remove("button-show-password_password-shown");
  }
};

const buttonsTypePassword = document.querySelectorAll('.button-show-password');

buttonsTypePassword.forEach(button => {
  button.addEventListener('click', function(e) {
    togglePassInput(button, e)
  })
});