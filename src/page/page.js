import menu from "./menu.js";
import home from "./home.js";
import { createAboutContent } from "./about.js";
import contact from "./contact.js";

export function loadPage(pageName) {
  const pageContent = document.querySelector("#content");
  pageContent.textContent = "";
  const pageHandler = {
    home: home(),
    menu: menu(),
    about: createAboutContent(),
    contact: contact(),
  };
  const contentClass = {
    home: "home-page",
    menu: "menu-page",
    about: "about-page",
    contact: "contact-page",
  };
  pageContent.append(pageHandler[pageName]);
  pageContent.classList = contentClass[pageName];
  return;
}
