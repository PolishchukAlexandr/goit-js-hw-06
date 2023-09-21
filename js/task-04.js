const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let currentValue = 0;

decrementBtn.addEventListener('click', () => {
  currentValue -= 1;
  updateCounter();
});

incrementBtn.addEventListener('click', () => {
  currentValue += 1;
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = currentValue;
}