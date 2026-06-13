const clock = document.querySelector("#clock");

setInterval(() => {
  const date = new Date().toLocaleTimeString();
  clock.textContent = date;
}, 1000);
