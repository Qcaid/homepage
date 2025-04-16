function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("time");
  if (timeElement) {
    timeElement.textContent = now.toLocaleTimeString();
  }
}

function init() {
  setInterval(updateTime, 1000);
}

window.onload = init;

const sections = document.querySelectorAll("section");
sections.forEach((section, i) => {
  section.style.setProperty("--i", i);
  section.addEventListener("click", () => {
    section.classList.toggle("expanded");
  });
});
