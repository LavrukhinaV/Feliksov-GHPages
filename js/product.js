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