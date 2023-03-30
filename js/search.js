// Смена placeholder
$(window).on("load resize", function(){
  const width = $(document).width();

  if (width <= 1200) {
    document.querySelector('.search__input').placeholder = "Я ищу..."
  } else {
    document.querySelector('.search__input').placeholder = "ПОИСК"
  }
});