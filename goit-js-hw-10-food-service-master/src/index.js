import css from "./css/style.css";
import menu from "./menu.json";
import template from "./template.hbs";
const menuList = document.querySelector(".js-menu");
const menuItem = template(menu);
const checkBox = document.getElementById("theme-switch-toggle");
const body = document.querySelector("body");
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
if (localStorage.getItem("theme")) {
  body.classList.add(Theme.DARK);
  checkBox.checked = true;
}

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem("theme", " ");
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.removeItem("theme");
  }
});

menuList.innerHTML += `${menuItem}`;
