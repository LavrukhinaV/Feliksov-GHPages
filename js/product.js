$(window).on("load resize", function(){
  var width = $(document).width();
  
  if (width > 1200) {
    $('.product-card__photos-slider').slick('unslick');
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