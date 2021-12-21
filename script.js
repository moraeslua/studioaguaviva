// MODAL - PÁG PRINCIPAL
const portfolioImgs = document.querySelectorAll('.container-image > div > img');
const modalContainer = document.querySelector('.modal-container');

function hideAndResetModal(event) {
  if(event.target.classList.contains('modal-container') || event.target.classList.contains('close-modal-button')) {
    modalContainer.classList.remove('show');
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = '';
  }
}

modalContainer.addEventListener('click', hideAndResetModal);

function showBigImage(event){
  const clickedPhoto = event.target;

  const imageTag = document.createElement('img');
  imageTag.src = clickedPhoto.src
  imageTag.classList.add('modal-img');
  
  const modalContent = document.querySelector('.modal-content');
  modalContent.appendChild(imageTag);

  const modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.add('show');
}


for (let child of portfolioImgs) {
  child.addEventListener('click', showBigImage);
}