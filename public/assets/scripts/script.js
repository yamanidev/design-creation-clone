const mainMenu = document.getElementById("main-menu");
const mainNav = document.getElementsByClassName("main-nav")[0];
const burger = document.getElementById("burger");
const cursor = document.getElementById("cursor");

burger.addEventListener("click", () => {
  mainMenu.classList.toggle("menu-clicked");
  mainNav.classList.toggle("menu-clicked");
  cursor.classList.toggle("menu-clicked");
});

document.addEventListener("mousemove", (event) => {
  cursor.style.top = `${event.pageY - 12.5}px`;
  cursor.style.left = `${event.pageX - 12.5}px`;
});
