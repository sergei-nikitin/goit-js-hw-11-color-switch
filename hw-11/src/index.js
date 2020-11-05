// import colors from './js/body-colors';
// import randomIntegerFromInterval from './js/fn-random-color';
// import { buttonStart, buttonStop } from './js/buttons';


const buttonStart = document.querySelector('button[data-action="start"');
const buttonStop = document.querySelector('button[data-action="stop"');

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

setRandomColor = () => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log(randomColor);
    document.body.style.background = randomColor;
}


buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop);

function onStart(e) {
  buttonStart.disabled = true;
  randomColor = setInterval(() => setRandomColor(), 1000);
}
function onStop(e) {
  buttonStart.disabled = false;
  clearInterval(randomColor)
}

