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

//HOVER DE .GO-TO-GALLERY
const containerGoToGallery = document.querySelector('.go-to-gallery');

containerGoToGallery.addEventListener('mouseover', () => {
  const circle = document.querySelector('#home-circle');
  const arrow = document.querySelector('#arrow');
  circle.style.backgroundColor = ' rgb(4, 36, 41)';
  circle.style.transition= '0.3s linear';
  arrow.style.color = 'white';
});

containerGoToGallery.addEventListener('mouseout', () => {
  const circle = document.querySelector('#home-circle');
  const arrow = document.querySelector('#arrow');
  circle.style.backgroundColor = 'unset';
  arrow.style.color = 'unset';
});

// MEDIA QUERY
if (window.matchMedia("(max-width: 1025px)").matches) {
  const portfolioSquareImages = document.querySelectorAll('.square-images');
  const portfolioRectangularImages = document.querySelectorAll('.rectangular-images');
  for (let image of portfolioRectangularImages) {
    image.classList.remove('images');
  }
  for (let image of portfolioSquareImages) {
    image.classList.remove('images');
  }
}