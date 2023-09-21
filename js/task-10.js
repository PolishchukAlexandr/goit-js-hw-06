function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => createBoxes(input.value));
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}