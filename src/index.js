import "./style.css";
import { loadPage } from "./page/page.js";

loadPage("home");

const navButtons = document.querySelector(".nav-buttons");

navButtons.addEventListener("click", (event) => {
  const target = event.target;

  if (target.id === "home-button") {
    loadPage("home");
    return;
  }
  if (target.id === "menu-button") {
    loadPage("menu");
    return;
  }
});
