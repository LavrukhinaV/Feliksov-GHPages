$(window).on("load resize", function(){
  const width = $(document).width();
  
  if (width > 1200) {
    $('.product-card__photos-slider').filter('.slick-initialized').slick('unslick');
  } else {
    $('.product-card__photos-slider').not('.slick-initialized').slick({  
      dots: true,
      fade: true,
      arrows : false,
    });
  }
});

// Добавляем рекомендованные украшения
const recommendedProduct = [
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

const recommendedProductTemplate = document.querySelector('.template-recommended-product').content;
const recommendedProductList = document.querySelector(".product-card__recommended-products-list");

recommendedProduct.forEach(function(element) {
	const productElement = recommendedProductTemplate.cloneNode(true);

	productElement.querySelector('.jewelry__image').src = element.image;
  productElement.querySelector('.jewelry__metal').textContent = element.metal;
  productElement.querySelector('.jewelry__size-value').textContent = element.size;
  productElement.querySelector('.jewelry__note').textContent = element.note;

  productElement.querySelectorAll('.jewelry__definition').forEach(el => {
    el.textContent = element.title
  });

  productElement.querySelectorAll('.jewelry__stone').forEach(stone => {
    stone.textContent = element.stone
  })
  productElement.querySelectorAll('.jewelry__specification').forEach(specification => {
    specification.textContent = element.specification;
  });

  element.slider.forEach(item => {
    const sliderItem = document.createElement('img');
    sliderItem.src = item;
    productElement.querySelector('.jewelry-slider').append(sliderItem)
  })

  recommendedProductList.append(productElement)
});

const buttonLike = document.querySelector('.product-card__description-like');
const buttonInSlider = document.querySelector('.product-card__photos-like');

buttonLike.addEventListener('click', () => {
  buttonLike.classList.toggle('product-card__description-like_active')
})
buttonInSlider.addEventListener('click', () => {
  buttonInSlider.classList.toggle('product-card__photos-like_active')
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