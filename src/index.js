import "./style.css";
import { loadPage } from "./init_page.js";
import { loadMenu } from "./menu.js";

loadPage();

const navButtons = document.querySelector(".nav-buttons");

navButtons.addEventListener("click", (event) => {
  const target = event.target;

  if (target.id === "home-button") {
    loadPage();
    return;
  }
  if (target.id === "menu-button") {
    loadMenu();
    return;
  }
});
