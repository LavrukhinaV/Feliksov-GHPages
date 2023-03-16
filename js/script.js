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
})

$(function() {
  $('.main-slider').slick({
    dots: true,
    // fade: true,
    arrows: false,
    speed: 1000,
  })
})

$(function() {
  $('.jewelry-slider').slick({
    dots: true,
    fade: true,
    arrows : false,
  })
})


// const inputAddFile = document.querySelector('.form-order__input-add-file');
// const filesCounter = document.querySelector('.form-order__paragraph-add-file')
// const buttonDeleteFiles = document.querySelector('.form-order__button-add-file')

// inputAddFile.onchange = (e) =>{
//   if(e.target.value) {
//     filesCounter.textContent = `Выбрано файлов ${e.target.files.length}`
//     buttonDeleteFiles.classList.add('form-order__button-add-file_transform')
//   } else {
//     filesCounter.textContent = 'Файл эскиза'
//     buttonDeleteFiles.classList.remove('form-order__button-add-file_transform')
//   }
// }

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
})

mobileMenu.addEventListener('click', function(e) {
  if(e.target.classList.contains('mobile-menu')) {
    mobileMenu.classList.add('mobile-menu_invisible');
    document.querySelector('.page').classList.remove('page_is-menu-open');
  }
})

// Раскрытие и закрытие элементов мобильного меню
let mobileMenuLinks = document.querySelectorAll('.link');

for (i=0; i<mobileMenuLinks.length; i++) {
  let subMenu = mobileMenuLinks[i].nextElementSibling;
  let arrow = mobileMenuLinks[i].lastElementChild;

  mobileMenuLinks[i].addEventListener('click', function() {
    subMenu.classList.toggle('mobile-menu__submenu_visible');
    arrow.classList.toggle('mobile-menu__arrow_menu-open');
  })
}
