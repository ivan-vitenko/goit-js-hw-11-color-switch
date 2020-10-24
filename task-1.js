const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtnEl: document.querySelector('[data-action="start"]'),
  stopBtnEl: document.querySelector('[data-action="stop"]'),
  bodyEl: document.querySelector('body'),
};

refs.stopBtnEl.disabled = true;
refs.startBtnEl.addEventListener('click', startChangeBodyColor);

let intervalId = null;

function startChangeBodyColor() {
  intervalId = setInterval(() => {
    refs.bodyEl.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length)];
  }, 1000);

  changeButtonsAvailability();
}

function stopChangeBodyColor() {
  clearInterval(intervalId);
  changeButtonsAvailability();
}

function changeButtonsAvailability() {
  if (refs.startBtnEl.disabled) {
    refs.startBtnEl.disabled = false;
    refs.startBtnEl.addEventListener('click', startChangeBodyColor);

    refs.stopBtnEl.disabled = true;
    refs.stopBtnEl.removeEventListener('click', stopChangeBodyColor);
  } else {
    refs.stopBtnEl.disabled = false;
    refs.stopBtnEl.addEventListener('click', stopChangeBodyColor);

    refs.startBtnEl.disabled = true;
    refs.startBtnEl.removeEventListener('click', startChangeBodyColor);
  }
}
