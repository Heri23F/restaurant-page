import { createMenuItem } from "./menu.js";
import { createHomeItem } from "./home.js";
import { createAboutItem } from "./about.js";

export function loadPage(pageName) {
  const pageContent = document.querySelector("#content");
  pageContent.textContent = "";
  const pageHandler = {
    home: createHomeItem(),
    menu: createMenuItem(),
    about: createAboutItem(),
  };
  pageContent.append(pageHandler[pageName]);
  return;
}
