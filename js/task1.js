const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const ref = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    bodyRef: document.querySelector('body')
}

const min = 0;
const max = colors.length-1;
let intervalId = null;
let activColorChange = false;

ref.startBtn.addEventListener('click', startColorChange);
ref.stopBtn.addEventListener('click', stopColorChange);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startColorChange() {
    if (activColorChange) {
        return
    }
    intervalId = setInterval(() => {
        // console.log(`start interval ${Date.now()}`);
        colorChange();
        activColorChange = true;
    }, 1000);
}

function stopColorChange() {
    clearInterval(intervalId);
    activColorChange = false;
}

function colorChange() {    
    const color = colors[randomIntegerFromInterval(min, max)];
    ref.bodyRef.style.backgroundColor = color;    
}
