// Todos os botões //
const panelsButton = document.querySelector('#panels');
const shelvesButton = document.querySelector('#shelves');
const treeOfLifeButton = document.querySelector('#tree-of-life');
const hangPlantsButton = document.querySelector('#hang-plants');
const bagsButton = document.querySelector('#bags');
const matStrapButton = document.querySelector('#mat-strap');
const dreamFilterButton = document.querySelector('#dream-filter');
const curtainsButton = document.querySelector('#curtains');
const cameraStrapButton = document.querySelector('#camera-strap');
const ulServicesList = document.querySelector('.services-list');

// Todos os containers //
const containerPanels = document.querySelector('.container-panels');
const containerShelves = document.querySelector('.container-shelves');
const containerTreeOfLife = document.querySelector('.container-tree-of-life');
const containerHangPlants = document.querySelector('.container-hang-plants');
const containerBags = document.querySelector('.container-bags');
const containerMatStrap = document.querySelector('.container-mat-strap');
const containerDreamFilter = document.querySelector('.container-dream-filter');
const containerCurtains = document.querySelector('.container-curtains');
const containerCameraStrap = document.querySelector('.container-camera-strap');

function showOnTheScreen (event) {
  event.preventDefault();
  const actualListItem = event.target;
  const showClassOwner = document.querySelector('.show');
  addClassShow(actualListItem, showClassOwner);
}

function addClassShow (actualTarget, classOwner) {  
  if (actualTarget.tagName === 'UL') return;
  if (classOwner) classOwner.classList.remove('show');
  const galleryTitle = document.querySelector('.gallery-title');
  
  if (actualTarget === panelsButton) {
    containerPanels.classList.add('show');
    if (galleryTitle.innerText !== 'Painéis') galleryTitle.innerText = 'Painéis';
  } else if (actualTarget === shelvesButton) {
    containerShelves.classList.add('show');
    galleryTitle.innerText = 'Prateleiras';
  } else if (actualTarget === treeOfLifeButton) {
    containerTreeOfLife.classList.add('show');
    galleryTitle.innerText = 'Árvores da Vida';
  } else if (actualTarget === hangPlantsButton) {
    containerHangPlants.classList.add('show');
    galleryTitle.innerText = 'Hang Plants';
  } else if (actualTarget === bagsButton) {
    containerBags.classList.add('show');
    galleryTitle.innerText = 'Bolsas';
  } else if (actualTarget === matStrapButton) {
    containerMatStrap.classList.add('show');
    galleryTitle.innerText = 'Mat Strap';
  } else if (actualTarget === dreamFilterButton) {
    containerDreamFilter.classList.add('show');
    galleryTitle.innerText = 'Filtro dos Sonhos';
  } else if (actualTarget === curtainsButton) {
    containerCurtains.classList.add('show');
    galleryTitle.innerText = 'Cortinas';
  } else if (actualTarget === cameraStrapButton) {
    containerCameraStrap.classList.add('show');
    galleryTitle.innerText = 'Camera Strap';
  } 
}

ulServicesList.addEventListener('click', showOnTheScreen);

