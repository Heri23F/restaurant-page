import menuPage from "./menu.js";
import homePage from "./home.js";
import aboutPage from "./about.js";
import contactPage from "./contact.js";

export function loadPage(pageName) {
  const pageContent = document.querySelector("#content");
  pageContent.textContent = "";
  const pageHandler = {
    home: homePage(),
    menu: menuPage(),
    about: aboutPage(),
    contact: contactPage(),
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
