import "./style.css";
import { loadPage } from "./page/page.js";

loadPage("home");

const navButtons = document.querySelector(".nav-buttons");

navButtons.addEventListener("click", (event) => {
  const target = event.target;
  if (
    target.id !== "home-button" &&
    target.id !== "menu-button" &&
    target.id !== "about-button" &&
    target.id !== "contact-button"
  ) {
    return;
  }
  const buttonMap = {
    "home-button": "home",
    "menu-button": "menu",
    "about-button": "about",
    "contact-button": "contact",
  };

  loadPage(buttonMap[target.id]);
});
