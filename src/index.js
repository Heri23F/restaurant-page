import "./style.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/roboto";
import { loadPage } from "./page/page.js";
import { createElement } from "./util.js";

loadPage("home");
const logo = createElement("h1", {
  elClass: "logo",
  textContent: "Restaurant",
});
const header = document.querySelector("header");
header.prepend(logo);

const navButtons = document.querySelector(".nav-buttons");

const buttonMap = {
  "home-button": "home",
  "menu-button": "menu",
  "about-button": "about",
  "contact-button": "contact",
};

navButtons.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (button) {
    loadPage(buttonMap[button.id]);
  }
});

const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
  const target = event.target.closest(".order-button");
  if (target) {
    loadPage("menu");
  }
});
