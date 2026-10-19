import { createMenuItem } from "./menu.js";
import { createHomeItem } from "./home.js";

export function loadPage(pageName) {
  const pageHandler = {
    home: createHomeItem,
    menu: createMenuItem,
  };
  pageHandler[pageName]();
  return;
}
