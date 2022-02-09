const danish = document.querySelector(".danish-flag");
const inglish = document.querySelector(".inglish-flag");
const spanish = document.querySelector(".spanish-flag");
const danishMenu = document.querySelector(".modal-danish");
const inglishMenu = document.querySelector(".modal-inglish");
const spanishMenu = document.querySelector(".modal-spanish");

danish.addEventListener("click", () => {
  danishMenu.classList.add("active");
  inglishMenu.classList.remove("active");
  spanishMenu.classList.remove("active");
});
inglish.addEventListener("click", () => {
  danishMenu.classList.remove("active");
  inglishMenu.classList.add("active");
  spanishMenu.classList.remove("active");
});
spanish.addEventListener("click", () => {
  danishMenu.classList.remove("active");
  inglishMenu.classList.remove("active");
  spanishMenu.classList.add("active");
});
