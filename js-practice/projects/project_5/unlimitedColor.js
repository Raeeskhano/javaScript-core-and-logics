//random color

let intervalId;

const RandomColorGen = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

const startColorEngine = function () {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = RandomColorGen();
  }, 1000);
};

const stopColorEngine = function () {
  clearInterval(intervalId);
  intervalId = null;
};

const startBtn = document
  .querySelector("#start")
  .addEventListener("click", startColorEngine);
const stopBtn = document
  .querySelector("#stop")
  .addEventListener("click", stopColorEngine);
