// Изменяем состояние Input type file

const inputAddFile = document.querySelector('.form-order__input-add-file');
const filesCounter = document.querySelector('.form-order__paragraph-add-file');
const buttonDeleteFiles = document.querySelector('.form-order__button-add-file');

function setFileUploaded(e) {
  filesCounter.textContent = `Выбрано файлов ${e.target.files.length}`;
  buttonDeleteFiles.classList.add('form-order__button-add-file_transform');
};

function setFileNotloaded() {
  filesCounter.textContent = 'Файл эскиза';
  buttonDeleteFiles.classList.remove('form-order__button-add-file_transform');
};

inputAddFile.onchange = (e) =>{
  if(e.target.value) {
    setFileUploaded(e);
  } else {
    setFileNotloaded();
  }
};

buttonDeleteFiles.addEventListener('click', () => {
  if(inputAddFile.value != "") {
    inputAddFile.value =""
    setFileNotloaded();
  } else {
    inputAddFile.click();
  }
});