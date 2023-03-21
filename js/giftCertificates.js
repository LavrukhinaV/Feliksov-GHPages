// Выбор дизайна карты
const radioFilters = document.querySelectorAll('.certificate__design-filter-invisible');
const sertificate = document.querySelector('.certificate__design-card');

radioFilters.forEach(item => {
  if(item.checked) {
    sertificate.className = `certificate__design-card certificate__design-card_${item.value}`
  }
});

radioFilters.forEach(item => {
  item.addEventListener('click', () => {
    sertificate.className = `certificate__design-card certificate__design-card_${item.value}`
  })
});

// Перемещение элементов
const buttonContainer = document.querySelector('.certificate__container');
const regulationsLink = document.querySelector('.certificate__design-link');
const designContainer = document.querySelector('.certificate__design');
const sumContainer = document.querySelector('.certificate__sum')


$(window).on("load resize", function(){
  var width = $(document).width();
  
  if (width <= 680) {
    designContainer.append(buttonContainer )
    designContainer.append(regulationsLink)
  } else {
    sumContainer.append(buttonContainer )
  }
});