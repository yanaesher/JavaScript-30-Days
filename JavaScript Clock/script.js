function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = seconds * 6 - 90;
  const minuteDeg = minutes * 6 - 90;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5 - 90;

  document.querySelector(
    ".hand-sec"
  ).style.transform = `rotate(${secondDeg}deg)`;
  document.querySelector(
    ".hand-min"
  ).style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector(
    ".hand-hour"
  ).style.transform = `rotate(${hourDeg}deg)`;
}

window.addEventListener("DOMContentLoaded", () => {
  setDate();
  setInterval(setDate, 1000);
});
