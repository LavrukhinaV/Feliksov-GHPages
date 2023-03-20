//Добавляем элементы на страницу
const jewelery = [
  {
    title : "Красивое кольцо",
    image: "./images/content/catalog-items.png",
    slider: [
      "./images/content/image 107.png",
      "./images/content/image 108.png",
      "./images/content/image 107.png"
    ],
    stone: "Камень",
    specification: "ст 11.97",
    metal: "Белое золото",
    size: "16.5",
    note : "exclusive"
  },
  {
    title : "Красивое кольцо",
    image: "./images/content/catalog-items.png",
    slider: [
      "./images/content/image 107.png",
      "./images/content/image 108.png",
      "./images/content/image 107.png"
    ],
    stone: "Камень",
    specification: "ст 11.97",
    metal: "Белое золото",
    size: "16.5",
    note : "exclusive"
  },
  {
    title : "Красивое кольцо",
    image: "./images/content/catalog-items.png",
    slider: [
      "./images/content/image 107.png",
      "./images/content/image 108.png",
      "./images/content/image 107.png"
    ],
    stone: "Камень",
    specification: "ст 11.97",
    metal: "Белое золото",
    size: "16.5",
    note : "exclusive"
  },
  {
    title : "Красивое кольцо",
    image: "./images/content/catalog-items.png",
    slider: [
      "./images/content/image 107.png",
      "./images/content/image 108.png",
      "./images/content/image 107.png"
    ],
    stone: "Камень",
    specification: "ст 11.97",
    metal: "Белое золото",
    size: "16.5",
    note : "exclusive"
  },
  {
    title : "Красивое кольцо",
    image: "./images/content/catalog-items.png",
    slider: [
      "./images/content/image 107.png",
      "./images/content/image 108.png",
      "./images/content/image 107.png"
    ],
    stone: "Камень",
    specification: "ст 11.97",
    metal: "Белое золото",
    size: "16.5",
    note : "exclusive"
  },
  {
    title : "Красивое кольцо",
    image: "./images/content/catalog-items.png",
    slider: [
      "./images/content/image 107.png",
      "./images/content/image 108.png",
      "./images/content/image 107.png"
    ],
    stone: "Камень",
    specification: "ст 11.97",
    metal: "Белое золото",
    size: "16.5",
    note : "exclusive"
  },
  {
    title : "Красивое кольцо",
    image: "./images/content/catalog-items.png",
    slider: [
      "./images/content/image 107.png",
      "./images/content/image 108.png",
      "./images/content/image 107.png"
    ],
    stone: "Камень",
    specification: "ст 11.97",
    metal: "Белое золото",
    size: "16.5",
    note : "exclusive"
  },
  {
    title : "Красивое кольцо",
    image: "./images/content/catalog-items.png",
    slider: [
      "./images/content/image 107.png",
      "./images/content/image 108.png",
      "./images/content/image 107.png"
    ],
    stone: "Камень",
    specification: "ст 11.97",
    metal: "Белое золото",
    size: "16.5",
    note : "exclusive"
  },
];

const jewelryTemplate = document.querySelector(".template-jewelry").content;
const jewelryElements = document.querySelector(".catalog__elements");

jewelery.forEach(function(element) {
  const jewelryElement = jewelryTemplate.cloneNode(true);

  jewelryElement.querySelector('.jewelry__image').src = element.image;
  jewelryElement.querySelector('.jewelry__metal').textContent = element.metal;
  jewelryElement.querySelector('.jewelry__size-value').textContent = element.size;
  jewelryElement.querySelector('.jewelry__note').textContent = element.note;

  jewelryElement.querySelectorAll('.jewelry__definition').forEach(el => {
    el.textContent = element.title
  });

  jewelryElement.querySelectorAll('.jewelry__stone').forEach(stone => {
    stone.textContent = element.stone
  })
  jewelryElement.querySelectorAll('.jewelry__specification').forEach(specification => {
    specification.textContent = element.specification;
  });

  element.slider.forEach(item => {
    const sliderItem = document.createElement('img');
    sliderItem.src = item;
    jewelryElement.querySelector('.jewelry-slider').append(sliderItem)
  })

  jewelryElements.append(jewelryElement)
})

//  Добавляем фильтры и мобильные фильтры на страницу 
const filtersElements = [
  {
    title: "Камень",
    options: ["Жёлтый бриллиант", "Бриллиант", "Изумруд", "Топаз", "Рубин", "Другие"]
  },
  {
    title: "Огранка",
    options: ["Круглая", "Груша", "Овал", "Маркиз", "Принцесса", "Античная"]
  },
  {
    title: "Каратность",
    options: ["1-2", "2-4", "6-8", "8 и более"]
  },
  {
    title: "Металл",
    options: ["Белое золото", "Розовое золото", "Серебро", "Платина"]
  },
];

const filterTemplate = document.querySelector(".template-filter").content;
const filterOptionTemplate = document.querySelector(".template-filter-option").content;
const filterList = document.querySelector(".catalog__filters");

filtersElements.forEach(function(element) {
  const filterElement = filterTemplate.cloneNode(true);

  filterElement.querySelector('.catalog__filter-title').textContent = element.title;

  element.options.forEach(option => {
    const filterOption = filterOptionTemplate.cloneNode(true);
    filterOption.querySelector('.catalog__filter-option-value').textContent = option;
    filterElement.querySelector('.catalog__filter-options').append(filterOption);
  })

  filterList.append(filterElement);
});

const mobileFilterTemplate = document.querySelector(".template-mobile-filters").content;
const mobileFilterOptionTemplate = document.querySelector(".template-mobile-filter-option").content;
const mobileFilterList = document.querySelector(".mobile-filters__list");

filtersElements.forEach(function(element) {
  const filterElement = mobileFilterTemplate.cloneNode(true);

  filterElement.querySelector('.mobile-filters__filter-title-text').textContent = element.title;

  element.options.forEach(option => {
    const filterOption = mobileFilterOptionTemplate.cloneNode(true);
    filterOption.querySelector('.catalog__filter-option-value').textContent = option;
    filterElement.querySelector('.mobile-filters__submenu').append(filterOption);
  })

  mobileFilterList.append(filterElement);
});

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