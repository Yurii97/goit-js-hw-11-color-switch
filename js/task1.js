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
let curentColor = null;

ref.startBtn.addEventListener('click', startColorChange);
ref.stopBtn.addEventListener('click', stopColorChange);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startColorChange() {
    if (ref.startBtn.disabled) {
        return
    }
    intervalId = setInterval(() => {
        console.log(`start interval ${Date.now()}`);

        const firstColor = curentColor;
        colorChange(firstColor);
        ref.startBtn.disabled = true;
    }, 1000);
}

function stopColorChange() {
    clearInterval(intervalId);    
    ref.startBtn.disabled = false;
}

function colorChange(firstColor) {    
    const color = colors[randomIntegerFromInterval(min, max)];
    if (firstColor !== color) {
        ref.bodyRef.style.backgroundColor = color;
        curentColor = color;        
    } else {        
        colorChange(firstColor);
    }
}