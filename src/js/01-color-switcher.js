// const refs = {
//     startBtn: document.querySelector('button[data-start="start"'),
//     stopBtn: document.querySelector('button[data-stop="stop"'),
//   },
//   colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
//   ],
//   randomIntegerFromInterval = (max) => {
//     return Math.floor(Math.random() * (max + 1));
//   },
//   setRandomColor = () => {
//     const _color = colors[randomIntegerFromInterval(colors.length - 1)]
//     console.log(_color)
//     document.body.style.backgroundColor = _color
//   }

// let interval = undefined

// refs.startBtn.addEventListener('click', e => interval = interval ?
//   interval :
//   setInterval(() => setRandomColor(), 1000));

// refs.stopBtn.addEventListener('click', e => clearInterval(interval));



// const colors = [];
  
//   const refs = {
//       body: document.body,
//       btnStart: document.querySelector('button[data-start = "start"]'),
//       btnStop: document.querySelector('button[data-stop = "stop"]'),
//   }
  
//   const INTERVAL_DELAY = 1000;
//   let intervalId = null;
  
//   refs.btnStart.addEventListener('click', changeColor);
//   refs.btnStop.addEventListener('click', onBtnStop);
  
// //   const randomIntegerFromInterval = (min, max) => {
// //     return Math.floor(Math.random() * (max - min + 1) + min);
// //   };
//   function getRandomHexColor() {
//     return Math.floor(Math.random() * 16777215).toString(16)};
  
  
//   function changeColor() {
//       intervalId = setInterval(() => {
//           refs.body.style.backgroundColor = getRandomHexColor(0, colors.length - 1);
//       }, INTERVAL_DELAY);
//       refs.btnStart.disabled = true;
//   };
  
//   function onBtnStop() {
//       clearInterval(intervalId);
//       refs.btnStart.disabled = false;
//   }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// references for buttons
const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
const { startBtn, stopBtn } = refs;
// default value of timer ID
let timerId = null;

// event listeners
startBtn.addEventListener('click', onChangeColorBtn);
stopBtn.addEventListener('click', onStopColorBtn);

// function for StartBtn for changing background color where we return another function to call first changing bg color withoud delay
function onChangeColorBtn() {
  timerId = setInterval(
    (function toImmediateChangeBgColor() {
      const ourColor = getRandomHexColor();
      document.body.style.backgroundColor = `${ourColor}`;
      return toImmediateChangeBgColor;
    })(),
    1000
  );

  // set "disabled" attribute just not to let create "hell of intervals"
  startBtn.setAttribute('disabled', '');
}

// function for stopping changing bg color(remove disabled attribute for startBtn)
function onStopColorBtn() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled', '');
}