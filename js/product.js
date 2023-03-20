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

document.querySelectorAll('.select').forEach(select => { //Выбриаем все выпадающие списки на странице

	let selectCurrent = select.querySelector('.select__current'),
			selectList = select.querySelector('.select__list'),
			selectInput = select.querySelector('.select__input'),
			selectItem = select.querySelectorAll('.select__item');

	//по клику добавляем/удалям класс
	selectCurrent.addEventListener('click', () => {
		selectList.classList.toggle('select__list--show')
    selectCurrent.classList.toggle('select__current_open')
	})

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
	})
	
	// функция закрытия выпадающего списка
	let selectListHide = () => {
		selectList.classList.remove('select__list--show')
    selectCurrent.classList.remove('select__current_open')
	}
	//Закрываем выпадающий сисок, если клик был вне области
	document.addEventListener('mouseup', (e) =>{
    if (!select.contains(e.target))	selectListHide()
  })
})

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