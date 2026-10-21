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
    contact: createContactItem()
  };
  pageContent.append(pageHandler[pageName]);
  return;
}
