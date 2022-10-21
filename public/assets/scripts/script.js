const mainMenu = document.getElementById("main-menu");
const mainNav = document.getElementsByClassName("main-nav")[0];
const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  mainMenu.classList.toggle("menu-clicked");
  mainNav.classList.toggle("menu-clicked");
});
