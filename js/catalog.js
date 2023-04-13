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

const elements = document.querySelectorAll(".jewelry");

elements.forEach(function(element) {
  const likeButton = element.querySelector('.jewelry__button-like');

  element.addEventListener('click', (e) => {
    if(e.target.closest('.jewelry__button-like')) {
      likeButton.classList.toggle('jewelry__button-like_active')
    } else {
      window.location.href = 'product.html'
    }
  })
})