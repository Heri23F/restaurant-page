import { createMenuItem } from "./menu.js";
import { createHomeItem } from "./home.js";
import { createAboutItem } from "./about.js";
import { createContactItem } from "./contact.js";

export function loadPage(pageName) {
  const pageContent = document.querySelector("#content");
  pageContent.textContent = "";
  const pageHandler = {
    home: createHomeItem(),
    menu: createMenuItem(),
    about: createAboutItem(),
    contact: createContactItem(),
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
