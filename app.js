const toggle = document.querySelector(".header-toggle");
const closeMenu = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", handleToggleMenu);
closeMenu.addEventListener("click", handleToggleMenu);

function handleToggleMenu(e) {
  menu.classList.toggle("menu-is-show");
}
