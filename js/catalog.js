// Открытие и закрытие массива из выпадающих фильтров
let buttonsOpenFilter = document.querySelectorAll('.catalog__filter-button');

for (i=0; i<buttonsOpenFilter.length; i++) {
  let filterOptions = buttonsOpenFilter[i].nextElementSibling;
  let arrow = buttonsOpenFilter[i].lastElementChild;

  buttonsOpenFilter[i].addEventListener('click', function() {
    if(document.querySelector('.catalog__filter-options.catalog__filter-options_visible')) {
      document.querySelector('.catalog__filter-options.catalog__filter-options_visible').previousElementSibling.classList.remove('catalog__filter-button_open')
      document.querySelector('.catalog__filter-options.catalog__filter-options_visible').previousElementSibling.querySelector('.catalog__filter-arrow').classList.remove('catalog__filter-arrow_open')
      document.querySelector('.catalog__filter-options.catalog__filter-options_visible').classList.remove('catalog__filter-options_visible');
    }
    filterOptions.classList.toggle('catalog__filter-options_visible');
    this.classList.toggle('catalog__filter-button_open');
    arrow.classList.toggle('catalog__filter-arrow_open');
  })
}

// Закрытие массива из выпадающих фильтров по клику по overlay
const filters =  Array.from(document.querySelectorAll( '.catalog__filter'));
let child = document.querySelector('.catalog__filter-options_visible');

document.addEventListener('click', ({target}) => {

  const isOut = !filters.some(el => (target === el) || null !== target.closest('.catalog__filter') || el.contains(target));
    // закрыть
    if (isOut) {
    filters.forEach(el => {
      el.querySelector('.catalog__filter-options').classList.remove('catalog__filter-options_visible');
      el.querySelector('.catalog__filter-button').classList.remove('catalog__filter-button_open');
      el.querySelector('.catalog__filter-arrow').classList.remove('catalog__filter-arrow_open');
    });
  }
});


// Открытие и закрытие мобильных фильтров
const openMobileFilters = document.querySelector('.catalog__open-filter');
const mobileFilters = document.querySelector('.mobile-filters');

openMobileFilters.addEventListener('click', function(e) {
  mobileFilters.classList.remove('mobile-filters_invisible');
  document.querySelector('.page').classList.add('page_is-menu-open');
})

mobileFilters.addEventListener('click', function(e) {
  if(e.target.classList.contains('mobile-filters')) {

    mobileFilters.classList.add('mobile-filters_invisible');
    document.querySelector('.page').classList.remove('page_is-menu-open');
  }
})

// Раскрытие и закрытие элементов мобильных фильтров
let mobileFiltersItems = document.querySelectorAll('.mobile-filters__filter-title');

for (i=0; i<mobileFiltersItems.length; i++) {
  let subMenu = mobileFiltersItems[i].nextElementSibling;
  let arrow = mobileFiltersItems[i].lastElementChild;

  mobileFiltersItems[i].addEventListener('click', function() {
    subMenu.classList.toggle('mobile-filters__submenu_visible');
    arrow.classList.toggle('mobile-filters__arrow_menu-open');
  })
}